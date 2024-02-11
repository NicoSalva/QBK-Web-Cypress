const locators = {
    homePage: {
      logo: '.logo',
      acceptCokies:'[data-cky-tag="accept-button"]',
      contact:'.text-wrapper > .button',
    },
    form:{
      name:'[name="firstname"]',
      email:'[inputmode="email"]',
      submit:'input[type="Submit"]',
      alertList:'ul[role="alert"]',
      inputClass:'div.input',
      contact:'[name="contact_type"]',
      company:'input[autocomplete="organization"]',
      message:'textarea[name="message"]',
      textInMessage:'textarea[class="hs-input hs-fieldtype-textarea"]',
      googleCheckbox: 'input[value="Google"]',
      contacListCheckbox:'ul[role="checkbox"]',
      reciveRegularUpdateCheckboxTrue:'input[value="true"]',
      closeButton:'.icon-x.close-modal'
    }

    
  };


module.exports = locators;
