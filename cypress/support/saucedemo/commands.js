const urls = require ('/cypress/config/urls.js');

Cypress.Commands.add('loginToSaucedemo', (login, password) => {
    cy.visit(urls.saucedemo);
    cy.get('#user-name').type(login);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  });