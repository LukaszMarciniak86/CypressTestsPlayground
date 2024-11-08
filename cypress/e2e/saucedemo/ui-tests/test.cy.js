import { onInventory } from "../../../support/saucedemo/UI/inventory_page";
import { onlogin } from "../../../support/saucedemo/UI/login_page";

describe('Testy logowania dla różnych użytkowników', () => {
  let users;

  before(() => {
    cy.fixture('saucedemo/users.json').then((userData) => {
      users = userData;
    });
  });

  const verifyLoginSuccess = () => {
    onInventory.getAppLogo().should('be.visible').and('have.text', 'Swag Labs');
  };

  const verifyLoginError = (expectedError) => {
    onlogin.getError().should('be.visible').and('have.text', expectedError);
  };

  // Dynamicznie tworzymy przypadki testowe dla każdego użytkownika
  users.forEach((user) => {
    it(`Logowanie jako ${user.role}`, () => {
      cy.loginToSaucedemo(user.login, user.password);

      if (user.expectedError) {
        // Jeśli oczekiwany jest błąd, sprawdzamy komunikat o błędzie
        verifyLoginError(user.expectedError);
      } else {
        // W przeciwnym razie sprawdzamy, czy logowanie się powiodło
        verifyLoginSuccess();
      }
    });
  });
});
