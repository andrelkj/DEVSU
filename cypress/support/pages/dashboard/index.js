import { el } from "./elements";

class DashboardPage {
  addItemToCart(product) {
    cy.contains(product).click();
    cy.contains("Add to cart").click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Product added");
    });
  }

  checkCartItems(product) {
    cy.get("#tbodyid").should("contain", product);
  }
}

export default new DashboardPage();
