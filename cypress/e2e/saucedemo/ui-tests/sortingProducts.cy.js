import { onInventory } from "../../../support/saucedemo/UI/inventory_page";

describe('Sorting tests', () => {

  it('Sort price low to high', () => {
    cy.loginAsStandarUserd();
    onInventory.getSortingContainer().select('Price (low to high)')
    onInventory.getPrice().then(($prices) => {
      const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
      const isSorted = prices.every((price, i) => i === 0 || price >= prices[i - 1]);
      expect(isSorted).to.be.true
    });
  });

  it('Sort price high to low', () => {
    cy.loginAsStandarUserd();
    onInventory.getSortingContainer().select('Price (high to low)')
    onInventory.getPrice().then(($prices) => {
      const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
      const isSorted = prices.every((price, i) => i === 0 || price <= prices[i - 1]);
      expect(isSorted).to.be.true
    });
  });

  it('Sort names A to Z', () => {
    cy.loginAsStandarUserd();
    onInventory.getSortingContainer().select('Name (A to Z)')
    onInventory.getName().then(($names) => {
      const names = [...$names].map(name => name.innerText.trim(''));
      const isSorted = names.every((name, i) => i === 0 || name >= names[i - 1]);
      expect(isSorted).to.be.true
    });
  });

  it('Sort names Z to A', () => {
    cy.loginAsStandarUserd();
    onInventory.getSortingContainer().select('Name (Z to A)')
    onInventory.getName().then(($names) => {
      const names = [...$names].map(name => name.innerText.trim(''));
      const isSorted = names.every((name, i) => i === 0 || name <= names[i - 1]);
      expect(isSorted).to.be.true
    });
  });
});