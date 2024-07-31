import dashboardPage from "../support/pages/dashboard";
import cartPage from "../support/pages/cart";

describe("DemoBlaze Purchase Flow", () => {
  beforeEach(() => {
    cy.fixture("e2e").as("data");
  });

  it("should add two products to the cart and complete the purchase", function () {
    const { products, user } = this.data;

    // Visit the DemoBlaze homepage
    cy.visit("/");

    // Add the products to the cart
    products.forEach((product) => {
      dashboardPage.addItemToCart(product);
      cy.contains("Home").click();
    });

    // Go to the cart
    cy.contains("Cart").click();

    // Verify the products are in the cart
    products.forEach((product) => {
      dashboardPage.checkCartItems(product);
    });

    // Fill out the purchase form
    cartPage.submitOrder();
    cartPage.fillForm(user);

    // Complete the purchase
    cartPage.submitPurchase();
    cartPage.confirmDialog();
  });
});
