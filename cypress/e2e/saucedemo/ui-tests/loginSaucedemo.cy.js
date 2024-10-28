import { onInventory } from "../../../support/saucedemo/UI/inventory_page";


describe('Login tests', () => {

  let standardUser;

  before(() => {
    cy.fixture('saucedemo/users.json').then((userData) => {
      standardUser = userData[0];
    });
  });

  it('Standard user login', () => {
    cy.loginToSaucedemo(standardUser.login, standardUser.password);
    onInventory.getAppLogo().should('be.visible').and('have.text', 'Swag Labs');
  });
});