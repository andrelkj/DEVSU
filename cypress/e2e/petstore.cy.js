describe("Petstore API Tests using Fixtures", () => {
  const apiUrl = "https://petstore.swagger.io/v2";

  beforeEach(() => {
    cy.fixture("petstore").as("data");
  });

  it("should create a new user", function () {
    const { newUser } = this.data;

    cy.request({
      method: "POST",
      url: `${apiUrl}/user`,
      body: newUser,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", newUser.id.toString());
    });
  });

  it("should find the created user", function () {
    const { newUser } = this.data;

    cy.request({
      method: "GET",
      url: `${apiUrl}/user/${newUser.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include({
        username: newUser.username,
        email: newUser.email,
      });
    });
  });

  it("should update the user's name and email", function () {
    const { newUser, updatedUser } = this.data;

    cy.request({
      method: "PUT",
      url: `${apiUrl}/user/${newUser.username}`,
      body: updatedUser,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", newUser.id.toString());
    });
  });

  it("should find the updated user", function () {
    const { newUser, updatedUser } = this.data;

    cy.request({
      method: "GET",
      url: `${apiUrl}/user/${newUser.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include({
        username: newUser.username,
        email: updatedUser.email,
      });
    });
  });

  it("should delete the user", function () {
    const { newUser } = this.data;

    cy.request({
      method: "DELETE",
      url: `${apiUrl}/user/${newUser.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", newUser.username);
    });
  });
});
