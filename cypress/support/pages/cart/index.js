import { el } from "./elements";

class CartPage {
  submitOrder() {
    cy.contains(el.placeOrder).click();
    cy.wait(1000);
  }

  fillForm(user) {
    cy.get(el.name).type(user.name);
    cy.get(el.country).type(user.country);
    cy.get(el.city).type(user.city);
    cy.get(el.creditCard).type(user.card);
    cy.get(el.month).type(user.month);
    cy.get(el.year).type(user.year);
  }

  submitPurchase() {
    cy.contains("Purchase").click();
    cy.get(el.alert)
      .should("be.visible")
      .and("contain", "Thank you for your purchase!");
  }

  printDetails() {
    cy.get(el.alert)
      .find("p")
      .then(($p) => {
        const orderDetails = $p.text();
        cy.log("Order Details: ", orderDetails);
      });
  }

  confirmDialog() {
    cy.wait(1000)
    cy.contains("OK").click();
  }
}

export default new CartPage();
