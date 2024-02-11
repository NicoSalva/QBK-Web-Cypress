/// <reference types ="cypress" />
import '../support/commands'
import locators from '../locators/locators';

describe('Qubika Website Workflow', () => {

  after(() => {
    cy.url().should(url => {
      expect(url).to.include('qubika.com/');
    });
  });


  it('Navigates and interacts with the contact form', () => {
    // Step 1: Navigate to the Qubika Website
    cy.visit('/')


    // Step 2: Validate that the website is displayed correctly
    cy.url().should('include', 'qubika.com') // a) URL
    cy.get(locators.homePage.logo).should('be.visible') // b) Qubika logo
    cy.get(locators.homePage.acceptCokies).should('be.visible').click();
    cy.get(locators.homePage.contact).should('be.visible')

      // Step 3: Click ‘Contact us’ button
      .click()

    // Step 4: Validate contact form is displayed
    cy.get(locators.form.name).should('be.visible') // a) Name field
    cy.get(locators.form.email).should('be.visible') // b) Email field
    cy.get(locators.form.submit).scrollIntoView().should('be.visible') // c) ‘Get in touch’ button


    // Step 5: Click ‘Get in touch’ button without filling any field
    .click()

    // Step 6: Validate that all mandatory fields have an error message
    cy.get(locators.form.alertList).should('have.length', 5);// Adjust based on actual implementation


    // Extiende los campos a verificar incluyendo el textarea
    const fieldNames = ['firstname', 'lastname', 'email', 'contact_type', 'message']; // Incluye 'message' para el textarea

    // Itera sobre cada div.input que contenga un input o textarea con los nombres especificados
    fieldNames.forEach((fieldName) => {
      cy.get(locators.form.inputClass).each(($div) => {
        // Busca tanto input como textarea dentro del div.input
        const $field = $div.find(`input[name="${fieldName}"], textarea[name="${fieldName}"]`);

        // Si el input o textarea existe dentro del div
        if ($field.length) {
          // Envuelve el div para usar .within() y realizar verificaciones dentro de este contexto
          cy.wrap($div).within(() => {
            // El siguiente elemento debe ser un ul con role="alert"
            cy.get(`+ ${locators.form.alertList}`).within(() => {
              cy.get('li').find('label').contains('Please complete this required field.').should('have.css', 'color', 'rgb(255, 0, 0)');
              // Dentro del ul, toma un elemento li y busca un elemento label que contenga el texto especificado y el color
              //cy.get('li').should('contain.text', 'Please complete this required field.');
            });
          });
        }
      });
    });

    // Step 7: Validate that only ‘Name’ field is marked with red color (Validate 'Name' fild is not red Color)
    colorValidate(locators.form.name)

    // Step 8: Write ‘Test name’ in the ‘Name’ field
    cy.get(locators.form.name).type('Test name')

    // Step 9: Click ‘Get in touch’ button
    cy.get(locators.form.submit).click()

    // Step 10: Validate that all mandatory fields have an error message except ‘Name’ field
    cy.get(locators.form.name).should('not.have.class', 'error');
    ['email', 'lastname', 'contact_type', 'message'].forEach(fieldName => {
      cy.get(`[name="${fieldName}"]`).should('have.class', 'error');

    });

    // Step 11: Validate that only ‘Email’ field is marked with red color
    colorValidate(locators.form.email);

    cy.fillFormWithoutSubmitting();
    cy.clearFormFields();
    cy.closeForm();
  })

})

function colorValidate(locator) {
  cy.get(locator).scrollIntoView().should(($el) => {
    // Obtén el color de CSS del elemento
    const color = $el.css('color');
    // Asegúrate de que el color no sea rojo en diferentes formatos
    expect(color).not.to.eq('rgb(255, 0, 0)'); // Formato RGB
    expect(color).not.to.eq('red'); // Nombre del color
    expect(color).not.to.eq('#ff0000'); // Formato HEX (Nota: .css() puede no retornar HEX)
  });
}
