// cypress/e2e/petstore.cy.js

describe("Petstore API Tests without Faker", () => {
    const apiUrl = "https://petstore.swagger.io/v2";
    const newUser = {
      id: 12345, // Example ID, should be unique
      username: "testuser",
      firstName: "Test",
      lastName: "User",
      email: "testuser@example.com",
      password: "password123",
      phone: "123-456-7890",
      userStatus: 1,
    };
  
    it("should create a new user", () => {
      cy.request({
        method: "POST",
        url: `${apiUrl}/user`,
        body: newUser,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message", newUser.id.toString());
      });
    });
  
    it("should find the created user", () => {
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
  
    it("should update the user's name and email", () => {
      const updatedUser = {
        ...newUser,
        firstName: "Updated",
        email: "updateduser@example.com",
      };
  
      cy.request({
        method: "PUT",
        url: `${apiUrl}/user/${newUser.username}`,
        body: updatedUser,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message", newUser.id.toString());
      });
    });
  
    it("should find the updated user", () => {
      cy.request({
        method: "GET",
        url: `${apiUrl}/user/${newUser.username}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include({
          username: newUser.username,
          email: "updateduser@example.com",
        });
      });
    });
  
    it("should delete the user", () => {
      cy.request({
        method: "DELETE",
        url: `${apiUrl}/user/${newUser.username}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message", newUser.username);
      });
    });
  });
  