// Feature('localization');

// Scenario('Site checks', ({ I }) => {

//   //we can read these from .env
//   let host = `http://localhost:8000`;
//   let package = 'website';

//   // let host = `http://localhost:8002`;
//   // let package = 'explore';

//   // let host = `http://localhost:8001`;
//   // let package = 'blog';

//   // global checks
//   const globalChecks = [
//     `I.see('css-y9dxuj-MenuItem')`
//   ];

//   const mainNavProducts = `.css-f0sd2r-Popover`;

//   if(package === 'blog'){
//     I.amOnPage(`${host}/what-will-marketing-look-like-in-2020`);
//     I.moveCursorTo( '.css-1p78lgr-Popover' );
//     I.click('Français');
//     I.seeInCurrentUrl(`${host}/fr/what-will-marketing-look-like-in-2020`);

//     // I.amOnPage(`${host}/chloe-mason-gray`);
//     // I.moveCursorTo( '.css-1p78lgr-Popover' );
//     // I.see('English (US)');
//     // I.click('English (US)');
//     // I.dontSeeInCurrentUrl("undefined");
//     // I.seeInCurrentUrl(`${host}/chloe-mason-gray`);
    
//     globalChecks;
//   }

//   if(package === 'explore'){
//     I.amOnPage(host);
//     I.see('Number of Entries');

//     I.click('/modern-care-strategic-handbook-telco.html/');
//     I.see('Download');

//     I.moveCursorTo( '.css-1p78lgr-Popover' );
//     I.see('English (US)');
//     I.wait(1);
//     I.dontSeeInCurrentUrl("undefined");
//     I.click('English (US)');
//     I.seeInCurrentUrl("modern-care-strategic-handbook-telco.html");

//     // the CTA should go to sprinklr.com
//     I.seeElement('.css-vurnku'); // button
//     I.click('.css-vurnku');
//     I.switchToNextTab()
//     I.seeInCurrentUrl('https://www.sprinklr.com/contact-us'); 

//     I.amOnPage(`${host}/ja/modern-care-strategic-handbook.html`);
//     I.see('プロダクト');
//     I.see('現代奴隷法ステートメント'); // footer legal
//     I.see('会議'); // request a meeting

//     // link to same page from switcher
//     I.moveCursorTo( '.css-1p78lgr-Popover' );
//     I.click('日本語');
//     I.seeInCurrentUrl(`${host}/ja/modern-care-strategic-handbook.html`);

//     // en explore for non EN, links should go to info (for now)
//     I.moveCursorTo( mainNavProducts );
//     I.click('モダンリサーチ');
//     I.seeInCurrentUrl(`https://www.sprinklr.com/ja/modern-research`);

//     I.amOnPage(`${host}/pt-br`);
//     I.see('Serviços');
//     I.see('SOLICITAR UMA REUNIÃO');
//     I.see('Fale conosco');

//     // the language switcher on explore should go to the translation if it exists
//     // else go to sprinklr.com

//     // globalChecks don't work on index page
//     globalChecks;
//   }

//   if(package === 'website'){

//     // test press releases
//     I.amOnPage(`${host}/fr/pr/sprinklr-announces-integration-with-quora/`);
//     I.see('PLANIFIER');
//     within('.css-2i7znq-FooterLinkList', () => {
//       I.see('Produits');
//     });

//     // test customer stories
//     // I.amOnPage(`${host}/stories`);
//     // I.click(`css-1vg39kj:last-child`);
//     // I.seeInCurrentUrl('story/match-uses-social-media-help-save-lives');
//     // within('.css-2i7znq-FooterLinkList', () => {
//     //   I.see('Produits');
//     // });

//     //test hreflan
//     I.amOnPage(`${host}`);
//     // I.seeInSource(`<link rel="canonical" href="https://www.sprinklr.com/" data-react-helmet="true">`);
//     // I.seeInSource(`<link rel="alternate" hreflang="x-default" href="https://www.sprinklr.com/" data-react-helmet="true">`);
//     // I.seeInSource(`<link rel="alternate" hreflang="fr" href="https://www.sprinklr.com/fr/" data-react-helmet="true">`);

//     I.amOnPage(`${host}/newsroom/`);
//     //I.seeNumberOfElements('.css-e0gnwh', 27);
//     I.click(`h6:first-child`);
//     I.dontSeeInCurrentUrl("newsroom");

//     // I.amOnPage(`${host}/fr/newsroom/`);
//     // I.click(`//*[@id="gatsby-focus-wrapper"]/div[4]/div/div/div[2]/div/div[12]/div[2]/div[1]/a`);
//     // I.dontSeeInCurrentUrl("newsroom");
//     // I.seeInCurrentUrl("fr/pr");
//     // if(I.grabValueFrom('/html/body/gatsby-portal//div') === "true"){
//     //   return false;
//     // }
//     // I.dontSeeElementInDOM('gatsby-portal');

//     I.amOnPage(`${host}/newsroom/`);
//     I.click(`a.css-2x6znu-Link`);
//     I.seeInCurrentUrl("businessinsider");

//     I.amOnPage(host);

//     // on website EN the menu links can be relative
//     I.moveCursorTo( mainNavProducts );
//     I.click('Modern Research');
//     I.seeInCurrentUrl(`/modern-research`);

//     //I.see('REQUEST A MEETING');
//     I.moveCursorTo( '.css-1p78lgr-Popover' );
//     I.see('Français');

//     I.click('Français');
//     I.seeInCurrentUrl(`${host}/fr`);

//     I.amOnPage(`${host}/fr/our-story/`);
//     I.see('PLANIFIER');
//     I.see('Produits');
//     I.see('Services');
//     I.see('Événements');
//     //I.see('Cas clients'); // check this one
//     I.see('À propos'); // this too
//     I.see('Confidentialité');
//     //I.see('Déclaration sur');

//     I.amOnPage(`${host}/fr/our-story/`);
//     //I.see('Conditions générales');

//     I.moveCursorTo( '.css-f0sd2r-Popover' );
//     I.click('Modern Marketing');
//     I.seeInCurrentUrl(`/modern-marketing`);
    
//     I.moveCursorTo( '.css-1p78lgr-Popover' );
//     I.click('日本語');
//     I.seeInCurrentUrl(`${host}/ja/modern-marketing`);

//     // blog link is offsite with lang code
//     I.click('Sprinklrブログ');
//     //I.click('Sprinklr Blog');
//     I.seeInCurrentUrl(`https://blog.sprinklr.com/ja/`);
//     I.amOnPage(`${host}/ja`);

//     //products in main nav
//     I.see('プロダクト');
//     I.see('現代奴隷法ステートメント'); // footer legal

//     // Request a meeting button
//     //I.see('会議');

//     I.amOnPage(`${host}/privacy`);
//     I.click('.css-x9gwge');
//     I.see("Sprinklr Group Companies");
//     I.click('.css-1car5vy-Button');
    
//     I.click('#submit_button');
//     I.seeInCurrentUrl("contact-us"); // should not submit empty

//     I.amOnPage(`${host}/products`);
//     I.see('Modern Advertising');

//     I.click('.css-1mh5qpc-Button');
//     I.seeInCurrentUrl("modern-marketing/");

//     I.click('CHAT WITH US');
//     I.seeElement('#spr-live-chat-app');
//     I.click('.spr-chat__trigger-box');

//     // I.amOnPage(`${host}/pt-br`);
//     // I.see('Serviços');
//     // I.see('SOLICITAR UMA REUNIÃO');
//     // I.see('Fale conosco');

//     I.amOnPage(`${host}/our-story`);
//     I.see('Our Story');
//     //I.seeNumberOfElements('picture', [15,18]); // this range is not working
//     //I.seeNumberOfElements('.css-1jzk1su-Person', 16);

//   }


// });

