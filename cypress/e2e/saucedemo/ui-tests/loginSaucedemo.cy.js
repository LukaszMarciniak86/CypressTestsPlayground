import { onInventory } from "../../../support/saucedemo/UI/inventory_page";
import { onlogin } from "../../../support/saucedemo/UI/login_page";


describe('Log in tests for different users', () => {

  let standardUser;
  let lockedUser;
  let problemUser;
  let performanceGlitchUser;
  let errorUser;
  let visualUser;

  before(() => {
    cy.fixture('saucedemo/users.json').then((userData) => {
      standardUser = userData[0];
      lockedUser = userData[1];
      problemUser = userData[2];
      performanceGlitchUser = userData[3];
      errorUser = userData[4];
      visualUser = userData[5];
    });
  });

  it('Log in as Standard User', () => {
    cy.loginToSaucedemo(standardUser.login, standardUser.password);
    onInventory.getTitle().should('be.visible').and('have.text', 'Products');
  });

  it('Log in as Locked Out User', () => {
    cy.loginToSaucedemo(lockedUser.login, lockedUser.password);
    onlogin.getError().should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Log in as Problem User', () => {
    cy.loginToSaucedemo(problemUser.login, problemUser.password);
    onInventory.getTitle().should('be.visible').and('have.text', 'Products');
  });

  it('Log in as Performance Glitch User', () => {
    cy.loginToSaucedemo(performanceGlitchUser.login, performanceGlitchUser.password);
    onInventory.getTitle().should('be.visible').and('have.text', 'Products');
  });

  it('Log in as Error User', () => {
    cy.loginToSaucedemo(errorUser.login, errorUser.password);
    onInventory.getTitle().should('be.visible').and('have.text', 'Products');
  });

  it('Log in as Visual User', () => {
    cy.loginToSaucedemo(visualUser.login, visualUser.password);
    onInventory.getTitle().should('be.visible').and('have.text', 'Products');
  });
});