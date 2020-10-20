const scraperObject = {
  url: "http://badiste.fr/selection-tournoi/ASMC69-138.html",
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
    }
  },
};

module.exports = scraperObject;
