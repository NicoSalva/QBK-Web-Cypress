# Cypress Project

This project contains automated tests for the website using Cypress, an end-to-end testing framework.

# Prerequisites
Before starting, make sure you have Node.js installed on your system. This project has been developed and tested with Node.js version 8.19.4.

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

# 💡Installation

1. Clone the repository to your local machine:
```
  https://github.com/NicoSalva/QUBIKA-Cypress.git
```

Navigate to the project directory:
```
cd QUBIKA-Cypress
```
Install the dependencies:

```
npm install
```
### Running the tests

To run the tests using Cypress Test Runner:
```
npx cypress open
```
To run the tests in headless mode:
```
npx cypress run
```

### QUBIKA CYPRESS SOLUTION


In developing this solution, I faced the controversy of whether or not to apply the Page Object Model (POM) to the Cypress project. The benefits of maintainability and reusability of this pattern are well known, but Cypress documentation consistently suggests not using it and instead focusing not only on the direct development of our tests but also on our actions. With this in mind, I decided not to use POM to develop the project. However, needs always dictate our actions, which is why I decided to make a small improvement by having a common file of locators. Having a single file of locators, structured among each page or section I am operating with, is sufficient not only to make its reading clear but also in case there is a need to change the value of any locator.

Regarding the validation of alert texts mentioned in practice at point 6, I decided not only to add the validation of the correct text but also the validation of color since point 7 is not clear about what it refers to by validating the red color of the name field, as this is not only not red but also no field on the page is red. With this said, I add the red color validation to the only red elements that are present on the page, the alerts for the mandatory fields.

I will leave some commands that are not requested in the exercise but describe the potential of Cypress. These commands are useful for completing the entire form, clearing the form, and closing the form window. As the page used for the exercise seems to be a production page, I will not perform data submission. There are some validations that iterate, and while it might seem necessary to abstract them to commands, it is preferable to leave them in a common function. In validations, commands are not used since this is not a good practice; it is preferable to have the validations directly within the test. This gives us a better reading of our tests in case of not knowing the project or the technicalities of the framework. It's often important to remember that we work for people outside our area, and having a clear reading of our development is a very important added value.
