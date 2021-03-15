const{ host, package, prod, info} = require("../../configs/website.conf");

Feature('menus');

Scenario('Testing menu links', ({ I }) => {

    I.amOnPage(`${host}`);

    // main menu
    I.see("Products");
      I.click("Products");
      I.seeInCurrentUrl(`${host}/products/`);
      I.amOnPage(`${host}`);

      //need IDs someday!
      const productsXpath = "//body/div[@id='___gatsby']/div[@id='gatsby-focus-wrapper']/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]";
      I.moveCursorTo(productsXpath);
      I.click("Modern Marketing");
      I.seeInCurrentUrl(`${host}/modern-marketing`);

      I.moveCursorTo(productsXpath);
      I.click("Modern Advertising");
      I.seeInCurrentUrl(`${host}/modern-advertising`);

      I.moveCursorTo(productsXpath);
      I.click("Modern Research");
      I.seeInCurrentUrl(`${host}/modern-research`);

      I.moveCursorTo(productsXpath);
      I.click("Modern Care");
      I.seeInCurrentUrl(`${host}/modern-care`);

      I.moveCursorTo(productsXpath);
      I.click("Modern Engagement");
      I.seeInCurrentUrl(`${host}/modern-engagement`);

      I.moveCursorTo(productsXpath);
      I.click("Citizen Experience");
      I.seeInCurrentUrl(`${host}/government`);

      I.moveCursorTo(productsXpath);
      I.click("Core Platform");
      I.seeInCurrentUrl(`${host}/core`);

      I.moveCursorTo(productsXpath);
      I.click("Developer Portal");
      I.switchToNextTab();
      I.seeInCurrentUrl(`https://developer.sprinklr.com`);
      I.closeCurrentTab();
      I.amOnPage(`${host}`);

    const servicesXpath = "//body/div[@id='___gatsby']/div[@id='gatsby-focus-wrapper']/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]";
    I.see("Services");
      I.moveCursorTo(servicesXpath); 
      I.click("Our Services");
      I.seeInCurrentUrl(`${host}/services`);

      I.moveCursorTo(servicesXpath); 
      I.click("Training");
      I.seeInCurrentUrl(`${host}/sprinklr-training`);

      I.moveCursorTo(servicesXpath); 
      I.click("For Partners");
      I.seeInCurrentUrl(`${host}/partners`);
  
      I.moveCursorTo(servicesXpath); 
      I.click("For Agencies");
      I.seeInCurrentUrl(`${host}/agency`);

    I.see("Events");
      I.click("Events");
      I.seeInCurrentUrl(`${host}/events/?category=virtual-events/`);
      I.amOnPage(`${host}`);
      
    I.see("Customer Stories");
      I.click("Customer Stories");
      I.seeInCurrentUrl(`${host}/stories/`);
      I.amOnPage(`${host}`);
    
     // would be nice to have some unique ids
     const aboutUsXpath = "//body/div[@id='___gatsby']/div[@id='gatsby-focus-wrapper']/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]"
     I.see("About Us");
      I.moveCursorTo(aboutUsXpath);
      I.click("Our Story");
      I.seeInCurrentUrl(`${host}/our-story`);

      I.amOnPage(`${host}`);

      I.moveCursorTo(aboutUsXpath);
      I.click("Newsroom");
      I.seeInCurrentUrl(`${host}/newsroom`);

      I.moveCursorTo(aboutUsXpath);
      I.click("Careers");
      I.seeInCurrentUrl(`${host}/careers`);

      I.moveCursorTo(aboutUsXpath);
      I.click("Contact Us");
      I.seeInCurrentUrl(`${host}/contact-us`);

    I.see("Sprinklr Blog");
      I.click("Sprinklr Blog");
      I.seeInCurrentUrl(`https://blog.sprinklr.com/`);

    I.amOnPage(`${host}`);
    
    I.see("REQUEST A MEETING");
    //I.see("REQUEST A MEETING");
      I.click("Request a Meeting");
      I.seeInCurrentUrl(`${host}/contact-us`);
    
      I.see("Login");

    // language switcher
    I.amOnPage(`${host}/products`);
    I.moveCursorTo("svg.css-ige9s2");
      I.click("English (US)");
      //I.seeInCurrentUrl(`${prod}/products`); // needs an update in Contentful
      I.seeInCurrentUrl(`${prod}/products`);
      
      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("English (GB)");
      I.seeInCurrentUrl(`${prod}/gb/products/`);
      
      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("Português");
      I.seeInCurrentUrl(`${prod}/pt-br/products/`);

      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("Français");
      I.seeInCurrentUrl(`${prod}/fr/products/`);

      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("日本語");
      I.seeInCurrentUrl(`${prod}/ja/products/`);

    I.amOnPage(`${host}`);
    let foo = locate("Events").inside('.css-tuy9hw');
 


    const footerClick = (linkText) => {
      // resorting to this sillyness because within won't work
      I.click(locate('span').withText(linkText).last());
    }

    // within(".css-tuy9hw", () => {
    //   I.click("Events");
    //   I.seeInCurrentUrl(`${host}/events`); // needs update in contentful to https://sprinklr.com/events/?category=virtual-events/
    // });

    // footer without within
    I.amOnPage(`${host}`);
    footerClick("Products");
    I.amOnPage(`${host}/products`);

    footerClick("Modern Marketing");
    I.seeInCurrentUrl(`${host}/modern-marketing`);

    footerClick("Modern Advertising");
    I.seeInCurrentUrl(`${host}/modern-advertising`);

    footerClick("Modern Research");
    I.seeInCurrentUrl(`${host}/modern-research`);

    footerClick("Modern Care");
    I.seeInCurrentUrl(`${host}/modern-care`);

    footerClick("Modern Engagement");
    I.seeInCurrentUrl(`${host}/modern-engagement`);

    footerClick("Citizen Experience");
    I.seeInCurrentUrl(`${host}/government`);

    footerClick("Core Platform");
    I.seeInCurrentUrl(`${host}/core`);

    footerClick("Sprinklr AI");
    I.seeInCurrentUrl(`${host}/ai`);
    
    footerClick("Sprinklr Sandbox");
    I.seeInCurrentUrl(`${host}/sprinklrsandbox`);

    footerClick("Services");
    I.seeInCurrentUrl(`${host}/services`);

    footerClick("Partners");
    I.seeInCurrentUrl(`${host}/partners`);

    footerClick("Training");
    I.seeInCurrentUrl(`${host}/sprinklr-training`);

    footerClick("Agency");
    I.seeInCurrentUrl(`${host}/agency`);

    footerClick("Integrated Services");
    I.seeInCurrentUrl(`${host}/services`);

    footerClick("Events");
    I.seeInCurrentUrl(`${host}/events`); // needs update in contentful to https://sprinklr.com/events/?category=virtual-events/

    footerClick("Customer Stories");
    I.seeInCurrentUrl(`${host}/stories`);

    footerClick("Blog");
    I.seeInCurrentUrl(`https://blog.sprinklr.com`);
    I.amOnPage(`${host}`);

    footerClick("Our Story");
    I.seeInCurrentUrl(`${host}/our-story`);

    footerClick("Newsroom");
    I.seeInCurrentUrl(`${host}/newsroom`);

    footerClick("Culture & Talent");
    I.seeInCurrentUrl(`${host}/culture-talent`);

    footerClick("Careers");
    I.seeInCurrentUrl(`${host}/careers`);
    
    footerClick("Contact Us");
    I.seeInCurrentUrl(`${host}/contact-us`);

    footerClick("Privacy");
    I.seeInCurrentUrl(`${prod}/privacy`);
    I.amOnPage(`${host}`);

    I.click("Modern Slavery Statement");
    I.seeInCurrentUrl(`Modern-Slavery-Act-2020.pdf`);
    I.amOnPage(`${host}`);

    I.click("Terms");
    I.seeInCurrentUrl(`${prod}/terms`);
    I.amOnPage(`${host}`);

    footerClick("Developer Portal");
    I.switchToNextTab();
    I.seeInCurrentUrl(`https://developer.sprinklr.com`);
    I.closeCurrentTab();
    I.amOnPage(`${host}`);
});

