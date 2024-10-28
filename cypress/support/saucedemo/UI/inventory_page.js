export class inventory {

    getAppLogo() {
        return cy.get(".app_logo");
    };
}

export const onInventory = new inventory();