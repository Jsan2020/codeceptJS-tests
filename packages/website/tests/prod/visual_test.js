const{ package, prod, info} = require("../../configs/website.conf");
const Sitemapper = require('sitemapper');
//const{ host} = require("../../configs/website.prod.codecept.conf");

// let host = "https://www.sprinklr.com";
// const sitemapper = new Sitemapper();
// sitemapper.timeout = 5000;

// const siteSlugsClean = siteUrls.sites.forEach(url => {
//   url.replace('https://www.sprinklr.com/','').replace('$/','');
// });

// console.log(siteSlugsClean);
Scenario('Visual testing', async ({ I }) => {
  I.amOnPage(`${host}`);
  I.saveScreenshot("homePage.png");
    I.seeVisualDiff("homePage.png", {tolerance: 2, prepareBaseImage: false});
});