import locators from '../locators/locators';

Cypress.Commands.add("fillFormWithoutSubmitting", () => {
    cy.get(locators.form.name).type('John Doe');
    cy.get(locators.form.email).type('john.doe@example.com');
    cy.get(locators.form.company).type('OpenAI');
    cy.get(locators.form.contact).select('Other');
    cy.get(locators.form.message).type('This is a test message.');
    cy.get(locators.form.contacListCheckbox).find(locators.form.googleCheckbox).check();
    cy.get('.checker').find(locators.form.reciveRegularUpdateCheckboxTrue).check();
});

Cypress.Commands.add("clearFormFields", () => {
    cy.get(locators.form.name).clear();
    cy.get(locators.form.email).clear();
    cy.get(locators.form.company).clear();
    cy.get(locators.form.textInMessage).clear();
    cy.get(locators.form.contacListCheckbox).find('input[value="Google"]').uncheck();
    cy.get('.checker').find(locators.form.reciveRegularUpdateCheckboxTrue).uncheck();
});

Cypress.Commands.add("closeForm", (baseURL) => {
    cy.get(locators.form.closeButton).click();
});