//Model des tournois
const Tournoi = require("../models/Tournois");

//require puppeteer
const browserObject = require("../utils/browser");
const scraperController = require("../utils/pageController");

exports.getAll = (req, res, next) => {
  //Start the browser and create a browser instance
  let browserInstance = browserObject.startBrowser();

  // Pass the browser instance to the scraper controller
  scraperController(browserInstance);
};
