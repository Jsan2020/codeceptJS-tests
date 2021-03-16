const{ host, package, prod, info, explore} = require("./pacakges/explore/configs/explore.conf.js");

Feature('menus');

Scenario('Testing explore menu links', ({ I }) => {

  let currentMenuItem = "//body/div[@id='___gatsby']/div[@id='gatsby-focus-wrapper']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]";
  const navClick = (linkText, expectToSee) => {
    I.scrollPageToTop();
    I.moveCursorTo(currentMenuItem);
    I.click(locate('a').withText(linkText).first());
    I.seeInCurrentUrl(expectToSee);
    I.amOnPage(`${host}`);
  }

  I.amOnPage(`${host}`);

    // main menu
    I.see("Products");
      navClick("Products", `${prod}/products/`);
      navClick("Modern Marketing",`${prod}/modern-marketing`);
      navClick("Modern Advertising",`${prod}/modern-advertising`);
      navClick("Modern Research",`${prod}/modern-research`);
      navClick("Modern Care", `${prod}/modern-care`);
      navClick("Modern Engagement", `${prod}/modern-engagement`);
      navClick("Citizen Experience", `${prod}/government`);
      navClick("Core Platform", `${prod}/core`);
      navClick("Developer Portal", `https://developer.sprinklr.com`);

    currentMenuItem = "//body/div[@id='___gatsby']/div[@id='gatsby-focus-wrapper']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]";
    I.see("Services");
      navClick("Our Services", `${prod}/services`);
      navClick("Training", `${prod}/sprinklr-training`);
      navClick("For Partners", `${prod}/partners`);
      navClick("For Agencies",`${prod}/agency`);

    I.see("Events");
      navClick("Events", `${prod}/events/?category=virtual-events/`);

    I.see("Customer Stories");
      navClick("Customer Stories", `${prod}/stories/`);

     // would be nice to have some unique ids
     currentMenuItem = "//body/div[@id='___gatsby']/div[@id='gatsby-focus-wrapper']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]"
     I.see("About Us");
      navClick("Our Story", `${prod}/our-story`);
      navClick("Newsroom", `${prod}/newsroom/`);// bad link in contentful
      navClick("Careers", `https://sprinklr.com/careers/`); // bad link in contentful
      navClick("Contact Us", `${prod}/contact-us/`);

    I.see("Sprinklr Blog");
      navClick("Sprinklr Blog", `https://blog.sprinklr.com/`);

    I.amOnPage(`${host}`);
    I.scrollPageToTop();
    
    I.see("REQUEST A MEETING");
      I.click(locate('button.css-w4smbx').first());
       I.switchToNextTab();
       I.seeInCurrentUrl(`${prod}/contact-us`);
       I.closeCurrentTab();
    
      I.see("Login");

    // language switcher
    currentMenuItem = `svg.css-ige9s2`;
      navClick("English (US)", `${explore}/modern-care-strategic-handbook.html/`);
      navClick("English (GB)", `${prod}/gb/`);
      navClick("Português", `${explore}/pt-br/modern-care-strategic-handbook.html/`);
      navClick("Français", `${explore}/fr/modern-care-strategic-handbook.html/`);
      navClick("日本語", `${explore}/ja/modern-care-strategic-handbook.html/`);
    
    const footerClick = (linkText, expectToSee, newTab) => {
      // resorting to this sillyness because within won't work
      I.amOnPage(`${host}`);
      I.scrollPageToBottom();
      I.click(locate('span').withText(linkText).last());
      
      newTab && I.switchToNextTab();
      I.seeInCurrentUrl(expectToSee);
      newTab && I.closeCurrentTab();

      I.amOnPage(`${host}`);
    }

    // within(".css-tuy9hw", () => {
    //   I.click("Events");
    //   I.seeInCurrentUrl(`${host}/events`); // needs update in contentful to https://sprinklr.com/events/?category=virtual-events/
    // });

    // footer without within
    footerClick("Products",`${prod}/products`);
    footerClick("Modern Marketing",`${prod}/modern-marketing`);
    footerClick("Modern Advertising",`${prod}/modern-advertising`);
    footerClick("Modern Research",`${prod}/modern-research`);
    footerClick("Modern Care",`${prod}/modern-care`);
    footerClick("Modern Engagement",`${prod}/modern-engagement`);
    footerClick("Citizen Experience",`${prod}/government`);
    footerClick("Core Platform",`${prod}/core`);
    footerClick("Sprinklr AI",`${prod}/ai`);
    footerClick("Sprinklr Sandbox",`${prod}/sprinklrsandbox`);
    footerClick("Services",`${prod}/services`);
    footerClick("Partners",`${prod}/partners`);
    footerClick("Training",`${prod}/sprinklr-training`);
    footerClick("Agency",`${prod}/agency`);
    footerClick("Integrated Services",`${prod}/services`);
    footerClick("Events",`${prod}/events`); // needs update in contentful to https://sprinklr.com/events/?category=virtual-events/
    footerClick("Customer Stories",`${prod}/stories`);
    footerClick("Blog",`https://blog.sprinklr.com`,true);
    footerClick("Our Story",`${prod}/our-story`);
    footerClick("Newsroom",`sprinklr.com/newsroom`); // check in contentful
    footerClick("Culture & Talent",`https://sprinklr.com/culture-talent`); //udate in contentful
    footerClick("Careers",`https://sprinklr.com/careers`); // bad link in contentful
    footerClick("Contact Us",`${prod}/contact-us`);
    footerClick("Privacy",`${prod}/privacy`);

    // legal links
    I.click("Modern Slavery Statement");
    I.seeInCurrentUrl(`Modern-Slavery-Act-2020.pdf`);
    I.amOnPage(`${host}`);

    I.click("Terms");
    I.seeInCurrentUrl(`${prod}/terms`);
    I.amOnPage(`${host}`);

    footerClick("Developer Portal",`https://developer.sprinklr.com`);
});

//I.scrollPageToTop();
//I.scrollPageToBottom();