export class login {

    getError() {
        return cy.get('[data-test="error"]');
    };
}

export const onlogin = new login();