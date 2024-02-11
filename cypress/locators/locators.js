const locators = {
    homePage: {
      logo: '.logo',
      acceptCookiesButton:'[data-cky-tag="accept-button"]',
      contact:'.text-wrapper > .button',
    },
    form:{
      name:'[name="firstname"]',
      email:'[inputmode="email"]',
      submitButton:'input[type="Submit"]',
      alertList:'ul[role="alert"]',
      inputClass:'div.input',
      contact:'[name="contact_type"]',
      company:'input[autocomplete="organization"]',
      message:'textarea[name="message"]',
      textInMessage:'textarea[class="hs-input hs-fieldtype-textarea"]',
      googleUpdatesCheckbox: 'input[value="Google"]',
      contacListCheckbox:'ul[role="checkbox"]',
      receiveRegularUpdatesCheckbox: 'input[value="true"]',
      closeButton:'.icon-x.close-modal'
    }
  };
  
module.exports = locators;
