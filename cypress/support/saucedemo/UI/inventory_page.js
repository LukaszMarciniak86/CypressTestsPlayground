export class inventory {

    getAppLogo() {
        return cy.get(".app_logo");
    };

    getTitle() {
        return cy.get('[class="title"]');
    }

    getSortingContainer() {
        return cy.get('[data-test="product-sort-container"]');
    };

    getPrice() {
        return cy.get('[class="inventory_item_price"]');
    };

    getName() {
        return cy.get('[class="inventory_item_name "]');
    }
}

export const onInventory = new inventory();