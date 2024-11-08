const urls = require('/cypress/config/urls.js');

Cypress.Commands.add('loginToSaucedemo', (login, password) => {
  cy.visit(urls.saucedemo);
  cy.get('#user-name').type(login);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('loginAsStandarUserd', () => {
  cy.fixture('saucedemo/users.json').then((userData) => {
    let standardUser = userData[0];
    cy.visit(urls.saucedemo);
    cy.get('#user-name').type(standardUser.login);
    cy.get('#password').type(standardUser.password);
    cy.get('#login-button').click();
  });
});