import locators from '../locators/locators';

/**
 * Fills out a form with predefined data without submitting it.
 */
Cypress.Commands.add("fillFormWithoutSubmitting", () => {
    cy.get(locators.form.name).type('John Doe');
    cy.get(locators.form.email).type('john.doe@example.com');
    cy.get(locators.form.company).type('OpenAI');
    cy.get(locators.form.contact).select('Other');
    cy.get(locators.form.message).type('This is a test message.');
    cy.get(locators.form.contacListCheckbox).find(locators.form.googleUpdatesCheckbox).check();
    cy.get('.checker').find(locators.form.receiveRegularUpdatesCheckbox).check();
});

/**
 * Clears all input fields in the form, including name, email, company, and message.
 * It also unchecks specific checkboxes, one related to Google in a contact list
 * and another for opting to receive regular updates. 
 */
Cypress.Commands.add("clearFormFields", () => {
    cy.get(locators.form.name).clear();
    cy.get(locators.form.email).clear();
    cy.get(locators.form.company).clear();
    cy.get(locators.form.textInMessage).clear();
    cy.get(locators.form.contacListCheckbox).find(locators.form.googleUpdatesCheckbox).uncheck();
    cy.get('.checker').find(locators.form.receiveRegularUpdatesCheckbox).uncheck();
});

/**
 * Closes the form modal or section by clicking on the designated close button,
 * identified by a specific locator.
 */
Cypress.Commands.add("closeForm", () => {
    cy.get(locators.form.closeButton).click();
});