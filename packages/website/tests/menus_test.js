const{ host, package, prod, info} = require("../configs/website.conf") 

Feature('menus');

Scenario('Site checks', ({ I }) => {

  // global checks
  const globalChecks = [
    //`I.see('css-y9dxuj-MenuItem')`
  ];

  const mainNavProducts = `.css-f0sd2r-Popover`;

  if(package === 'blog'){
    I.amOnPage(`${host}/what-will-marketing-look-like-in-2020`);
    I.moveCursorTo( '.css-1p78lgr-Popover' );
    I.click('Français');
    I.seeInCurrentUrl(`${host}/fr/what-will-marketing-look-like-in-2020`);

    // I.amOnPage(`${host}/chloe-mason-gray`);
    // I.moveCursorTo( '.css-1p78lgr-Popover' );
    // I.see('English (US)');
    // I.click('English (US)');
    // I.dontSeeInCurrentUrl("undefined");
    // I.seeInCurrentUrl(`${host}/chloe-mason-gray`);
    
    globalChecks;
  }

  if(package === 'explore'){
    I.amOnPage(host);
    I.see('Number of Entries');

    I.click('/modern-care-strategic-handbook-telco.html/');
    I.see('Download');

    I.moveCursorTo( '.css-1p78lgr-Popover' );
    I.see('English (US)');
    I.wait(1);
    I.dontSeeInCurrentUrl("undefined");
    I.click('English (US)');
    I.seeInCurrentUrl("modern-care-strategic-handbook-telco.html");

    // the CTA should go to sprinklr.com
    I.seeElement('.css-vurnku'); // button
    I.click('.css-vurnku');
    I.switchToNextTab()
    I.seeInCurrentUrl('https://www.sprinklr.com/contact-us'); 

    I.amOnPage(`${host}/ja/modern-care-strategic-handbook.html`);
    I.see('プロダクト');
    I.see('現代奴隷法ステートメント'); // footer legal
    I.see('会議'); // request a meeting

    // link to same page from switcher
    I.moveCursorTo( '.css-1p78lgr-Popover' );
    I.click('日本語');
    I.seeInCurrentUrl(`${host}/ja/modern-care-strategic-handbook.html`);

    // en explore for non EN, links should go to info (for now)
    I.moveCursorTo( mainNavProducts );
    I.click('モダンリサーチ');
    I.seeInCurrentUrl(`https://www.sprinklr.com/ja/modern-research`);

    I.amOnPage(`${host}/pt-br`);
    I.see('Serviços');
    I.see('SOLICITAR UMA REUNIÃO');
    I.see('Fale conosco');

    // the language switcher on explore should go to the translation if it exists
    // else go to sprinklr.com

    // globalChecks don't work on index page
    globalChecks;
  }

  if(package === 'websiteWIP'){

    // test press releases
    I.amOnPage(`${host}/fr/pr/sprinklr-announces-integration-with-quora/`);
    I.see('PLANIFIER');
    within('.css-2i7znq-FooterLinkList', () => {
      I.see('Produits');
    });

    // test customer stories
    // I.amOnPage(`${host}/stories`);
    // I.click(`css-1vg39kj:last-child`);
    // I.seeInCurrentUrl('story/match-uses-social-media-help-save-lives');
    // within('.css-2i7znq-FooterLinkList', () => {
    //   I.see('Produits');
    // });

    //test hreflan
    I.amOnPage(`${host}`);
    // I.seeInSource(`<link rel="canonical" href="https://www.sprinklr.com/" data-react-helmet="true">`);
    // I.seeInSource(`<link rel="alternate" hreflang="x-default" href="https://www.sprinklr.com/" data-react-helmet="true">`);
    // I.seeInSource(`<link rel="alternate" hreflang="fr" href="https://www.sprinklr.com/fr/" data-react-helmet="true">`);

    I.amOnPage(`${host}/newsroom/`);
    //I.seeNumberOfElements('.css-e0gnwh', 27);
    I.click(`h6:first-child`);
    I.dontSeeInCurrentUrl("newsroom");

    // I.amOnPage(`${host}/fr/newsroom/`);
    // I.click(`//*[@id="gatsby-focus-wrapper"]/div[4]/div/div/div[2]/div/div[12]/div[2]/div[1]/a`);
    // I.dontSeeInCurrentUrl("newsroom");
    // I.seeInCurrentUrl("fr/pr");
    // if(I.grabValueFrom('/html/body/gatsby-portal//div') === "true"){
    //   return false;
    // }
    // I.dontSeeElementInDOM('gatsby-portal');

    I.amOnPage(`${host}/newsroom/`);
    I.click(`a.css-2x6znu-Link`);
    I.seeInCurrentUrl("businessinsider");

    I.amOnPage(host);

    // on website EN the menu links can be relative
    I.moveCursorTo( mainNavProducts );
    I.click('Modern Research');
    I.seeInCurrentUrl(`/modern-research`);

    //I.see('REQUEST A MEETING');
    I.moveCursorTo( '.css-1p78lgr-Popover' );
    I.see('Français');

    I.click('Français');
    I.seeInCurrentUrl(`${host}/fr`);

    I.amOnPage(`${host}/fr/our-story/`);
    I.see('PLANIFIER');
    I.see('Produits');
    I.see('Services');
    I.see('Événements');
    //I.see('Cas clients'); // check this one
    I.see('À propos'); // this too
    I.see('Confidentialité');
    //I.see('Déclaration sur');

    I.amOnPage(`${host}/fr/our-story/`);
    //I.see('Conditions générales');

    I.moveCursorTo( '.css-f0sd2r-Popover' );
    I.click('Modern Marketing');
    I.seeInCurrentUrl(`/modern-marketing`);
    
    I.moveCursorTo( '.css-1p78lgr-Popover' );
    I.click('日本語');
    I.seeInCurrentUrl(`${host}/ja/modern-marketing`);

    // blog link is offsite with lang code
    I.click('Sprinklrブログ');
    //I.click('Sprinklr Blog');
    I.seeInCurrentUrl(`https://blog.sprinklr.com/ja/`);
    I.amOnPage(`${host}/ja`);

    //products in main nav
    I.see('プロダクト');
    I.see('現代奴隷法ステートメント'); // footer legal

    // Request a meeting button
    //I.see('会議');

    I.amOnPage(`${host}/privacy`);
    I.click('.css-x9gwge');
    I.see("Sprinklr Group Companies");
    I.click('.css-1car5vy-Button');
    
    I.click('#submit_button');
    I.seeInCurrentUrl("contact-us"); // should not submit empty

    I.amOnPage(`${host}/products`);
    I.see('Modern Advertising');

    I.click('.css-1mh5qpc-Button');
    I.seeInCurrentUrl("modern-marketing/");

    I.click('CHAT WITH US');
    I.seeElement('#spr-live-chat-app');
    I.click('.spr-chat__trigger-box');

    // I.amOnPage(`${host}/pt-br`);
    // I.see('Serviços');
    // I.see('SOLICITAR UMA REUNIÃO');
    // I.see('Fale conosco');

    I.amOnPage(`${host}/our-story`);
    I.see('Our Story');
    //I.seeNumberOfElements('picture', [15,18]); // this range is not working
    //I.seeNumberOfElements('.css-1jzk1su-Person', 16);

  }

  if(package === 'website'){

    I.amOnPage(`${host}`);

    // main menu
    I.see("Products");
      I.click("Products");
      I.seeInCurrentUrl(`${prod}/products`);
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
      I.seeInCurrentUrl(`${prod}/events/?category=virtual-events`);
      I.amOnPage(`${host}`);
      
    I.see("Customer Stories");
      I.click("Customer Stories");
      I.seeInCurrentUrl(`${prod}/stories/`);
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
    
    I.see("BOOK A MEETING");
    //I.see("REQUEST A MEETING");
      I.click("Book a Meeting");
      I.seeInCurrentUrl(`${host}/contact-us`);
    
      I.see("Login");

    // language switcher
    I.amOnPage(`${host}/products`);
    I.moveCursorTo("svg.css-ige9s2");
      I.click("English (US)");
      //I.seeInCurrentUrl(`${prod}/products`); // needs an update in Contentful
      I.seeInCurrentUrl(`https://sprinklr.com/products`);
      
      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("English (GB)");
      I.seeInCurrentUrl(`https://info.sprinklr.com/gb/products/`);
      
      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("Português");
      I.seeInCurrentUrl(`https://info.sprinklr.com/pt-br/products/`);

      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("Français");
      I.seeInCurrentUrl(`https://info.sprinklr.com/fr/products/`);

      I.amOnPage(`${host}/products`);
      I.moveCursorTo("svg.css-ige9s2");
      I.click("日本語");
      I.seeInCurrentUrl(`https://info.sprinklr.com/ja/products/`);

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
    I.seeInCurrentUrl(`${info}/privacy`);
    I.amOnPage(`${host}`);

    I.click("Modern Slavery Statement");
    I.seeInCurrentUrl(`Modern-Slavery-Act-2020.pdf`);
    I.amOnPage(`${host}`);

    I.click("Terms");
    I.seeInCurrentUrl(`${info}/terms`);
    I.amOnPage(`${host}`);

    footerClick("Developer Portal");
    I.switchToNextTab();
    I.seeInCurrentUrl(`https://developer.sprinklr.com`);
    I.closeCurrentTab();
    I.amOnPage(`${host}`);
  }
});

