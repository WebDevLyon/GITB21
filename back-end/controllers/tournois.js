//Model des tournois
const Tournoi = require("../models/Tournois");

//require puppeteer
const puppeteer = require("puppeteer");

//Obtenir la liste des tournois avec un joueur du club inscrit depuis badiste et les sauvegarder si pas existant sur la database
exports.getAll = (req, res, next) => {
  /*Browser*/
  async function startBrowser() {
    let browser;
    try {
      console.log("Opening the browser......");
      browser = await puppeteer.launch({
        headless: true, //true en production
        args: ["--disable-setuid-sandbox"],
        ignoreHTTPSErrors: true,
      });
    } catch (err) {
      console.log("Could not create a browser instance => : ", err);
    }
    return browser;
  }
  /*End*/

  /*page scraper*/
  const scraperObject = {
    url: req.body.badiste,
    tournoiArray: [],
    async scraper(browser) {
      let page = await browser.newPage();
      console.log(`Navigating to ${this.url}...`);
      await page.goto(this.url);
      // Wait for the required DOM to be rendered
      await page.waitForSelector(".toptable");
      // Get the link to all the required books
      let urls = await page.$$eval("table.tux tr", (links) => {
        // Make sure the book to be scraped is in stock
        links = links.filter((link) => link.querySelector("td"));

        // Extract the links from the data*/
        links = links.map((el) => el.querySelector("a:last-of-type").href);
        return links;
      });
      console.log(urls);
      // Loop through each of those links, open a new page instance and get the relevant data from them
      let pagePromise = (link) =>
        new Promise(async (resolve, reject) => {
          let dataObj = {};
          let newPage = await browser.newPage();
          await newPage.goto(link);
          dataObj["linkTournoi"] = link;
          dataObj["nomTournoi"] = await newPage.$eval(
            "h2",
            (text) => text.textContent
          );
          dataObj["dateLimite"] = await newPage.$eval(
            "tr:nth-of-type(4) td:nth-of-type(2)",
            (text) => text.textContent
          );
          dataObj["serie"] = await newPage.$eval(
            "tr:nth-of-type(8) td:nth-of-type(2)",
            (text) => text.textContent
          );
          dataObj[
            "adresse"
          ] = await newPage.$eval(
            "tr:nth-of-type(10) td:nth-of-type(2)",
            (text) => text.innerHTML.split("GPS")[0].split("<br>").join(" ")
          );
          resolve(dataObj);
          await newPage.close();
        });

      for (link in urls) {
        let currentPageData = await pagePromise(urls[link]);
        // scrapedData.push(currentPageData);
        console.log(currentPageData);
        this.tournoiArray.push(currentPageData);
      }
      //save des tournois sur la DB s'ils n'existe pas déjà
      this.tournoiArray.forEach((tournoi) => {
        //on vérifie s'il n'est pas déjà dans la DB
        Tournoi.findOne({ link: tournoi.linkTournoi })
          .then((tournoifind) => {
            if (tournoifind) {
              console.log("Le tournois est déjà dans la DB");
            } else {
              const newTournoi = new Tournoi({
                nom: tournoi.nomTournoi,
                link: tournoi.linkTournoi,
                serie: tournoi.serie,
                dateLimite: new Date(tournoi.dateLimite),
                adresse: tournoi.adresse,
              });
              newTournoi
                .save()
                .then(() => console.log("tournois save"))
                .catch((error) => res.status(400).json({ error }));
            }
          })
          .catch((err) => res.status(500).json({ err }));
      });
    },
  };
  /*END*/

  /*Page controllers*/
  async function scrapeAll(browserInstance) {
    let browser;
    try {
      browser = await browserInstance;
      await scraperObject.scraper(browser);
    } catch (err) {
      console.log("Could not resolve the browser instance => ", err);
    }
  }
  /*END*/

  //Start the browser and create a browser instance
  let browserInstance = startBrowser();
  // Pass the browser instance to the scraper controller
  scrapeAll(browserInstance);
};
