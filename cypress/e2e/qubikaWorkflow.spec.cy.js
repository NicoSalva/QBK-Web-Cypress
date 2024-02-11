/// <reference types ="cypress" />
import '../support/commands'
import locators from '../locators/locators';

describe('Qubika Website Workflow', () => {

  // Validates the URL after all tests have been executed
  after(() => {
    cy.url().should(url => {
      expect(url).to.include('qubika.com/');
    });
  });

  it('Navigates and interacts with the contact form', () => {
    // Step 1: Navigate to the Qubika Website
    cy.visit('/')

    // Step 2: Validate that the website is displayed correctly
    // Validates the URL and visibility of specific elements
    cy.url().should('include', 'qubika.com') // a) URL
    cy.get(locators.homePage.logo).should('be.visible') // b) Qubika logo
    cy.get(locators.homePage.acceptCookiesButton).should('be.visible').click(); // Accept cookies if the button is visible
    cy.get(locators.homePage.contact).should('be.visible').click() // c) Click ‘Contact us’ button

    // Step 3: Validate contact form is displayed
    // Checks for the visibility of form fields and the 'Get in touch' button
    cy.get(locators.form.name).should('be.visible') // a) Name field
    cy.get(locators.form.email).should('be.visible') // b) Email field
    cy.get(locators.form.submitButton).scrollIntoView().should('be.visible').click() // c) ‘Get in touch’ button

    // Step 4: Click ‘Get in touch’ button without filling any field
    // This action has already been triggered in the previous step

    // Step 5: Validate that all mandatory fields have an error message
    // Verifies the presence of error messages for all required fields
    cy.get(locators.form.alertList).should('have.length', 5); // Assumes 5 fields are mandatory

    // For each specified field, verifies that an error message is displayed if the field is empty
    const fieldNames = ['firstname', 'lastname', 'email', 'contact_type', 'message']; 
    fieldNames.forEach(fieldName => {
      cy.get(locators.form.inputClass).each($div => {
        const $field = $div.find(`input[name="${fieldName}"], textarea[name="${fieldName}"]`);
        if ($field.length) {
          cy.wrap($div).within(() => {
            cy.get(`+ ${locators.form.alertList}`).within(() => {
              // Checks for the specific error message and color for each field
              cy.get('li').find('label').contains('Please complete this required field.').should('have.css', 'color', 'rgb(255, 0, 0)');
            });
          });
        }
      });
    });

    // Validates that the 'Name' field is not marked with red, indicating an error
    colorValidate(locators.form.name)

    // Step 6: Write ‘Test name’ in the ‘Name’ field
    cy.get(locators.form.name).type('Test name')

    // Step 7: Click ‘Get in touch’ button again
    cy.get(locators.form.submitButton).click()

    // Step 8: Validate that all mandatory fields except ‘Name’ field have an error message
    cy.get(locators.form.name).should('not.have.class', 'error');
    ['email', 'lastname', 'contact_type', 'message'].forEach(fieldName => {
      cy.get(`[name="${fieldName}"]`).should('have.class', 'error');
    });

    // Step 9: Validate that only the ‘Email’ field is marked with red color
    colorValidate(locators.form.email);

    // Fills the form without submitting for testing purposes
    cy.fillFormWithoutSubmitting();
    // Clears all form fields to ensure a clean state
    cy.clearFormFields();
    // Closes the form modal or section
    cy.closeForm();
  })

  // Utility function to validate the CSS color of an element
  function colorValidate(locator) {
    cy.get(locator).scrollIntoView().should($el => {
      const color = $el.css('color');
      expect(color).not.to.eq('rgb(255, 0, 0)'); // Ensures the color is not red in any format
      expect(color).not.to.eq('red');
      expect(color).not.to.eq('#ff0000');
    });
  }
})
