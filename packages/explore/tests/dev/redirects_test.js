const{ package, prod, info, explore} = require("../../configs/explore.conf");

host = 'http://dev-explore.sprinklr.com.s3-website-us-east-1.amazonaws.com';

Feature('redirects');

Scenario('Testing dev redirects', ({ I }) => {

  I.amOnPage(`${host}/wp-content/uploads/2020/09/NC_Sprinklr-Modern-Care-Strategic-Handbook-JULY-2020_e-RevATamisier.pdf`);
  I.seeInCurrentUrl('https://prod2-sprcdn-assets.sprinklr.com/50400/14f88127-894a-4f86-a212-2aea2f134fa6-351318030/NC_Sprinklr-Modern-Care-Strate.pdf');

  I.amOnPage(`${host}/wp-content/uploads/2020/11/NC_Sprinklr-Modern-Care-Strategic-Handbook-JULY-2020_de.pdf`);
  I.seeInCurrentUrl('https://prod2-sprcdn-assets.sprinklr.com/50400/1e42a583-8f59-432f-aa74-194fc2aa182e-2117872257/NC_Sprinklr-Modern-Care-Strate.pdf');

  I.amOnPage(`${host}/wp-content/uploads/2020/09/Sprinklr_Coaching_Care_Agents_9.11_Edit.pdf`);
  I.seeInCurrentUrl('https://prod2-sprcdn-assets.sprinklr.com/50400/3943a562-32ba-49ee-8967-9768c278b812-321733030/Sprinklr_Coaching_Care_Agents_.pdf');

  I.amOnPage(`${host}/wp-content/uploads/2020/09/Sprinklr-Modern-Care-Strategic-Handbook-JULY-2020.pdf`);
  I.seeInCurrentUrl('https://prod2-sprcdn-assets.sprinklr.com/50400/1498de2f-158c-4304-b6b1-b5dd068d7c18-78504657/Sprinklr-Modern-Care-Strategic.pdf');

  I.amOnPage(`${host}/UnsubscribePage.html`);
  I.seeInCurrentUrl('/unsubscribe');
    
});