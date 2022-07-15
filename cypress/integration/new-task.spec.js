describe("Adding Users", () => {
  it("has a modal opened by an add task button", () => {
    cy.visit("http://localhost:3001");
    cy.get(".user-list button").click();
    cy.get("#modal").contains("Add User");
  });
  it("you can add users with a name and avatar", () => {
    cy.visit("localhost:3001");
    cy.get("button").click();
    cy.get('[name="name"]').type("test123");
    cy.get('[name="avatar"]').type(
      "https://docs.cypress.io/_nuxt/img/cypress-logo.a2e1292.svg"
    );
    cy.get("form > button").click();
    cy.get("span").contains("test123");
  });
});

describe("Adding tasks", () => {
  it("is able to add tasks", () => {
    cy.visit("localhost:3001/boards/1");
    cy.get("button").click();
    cy.get("input").clear();
    cy.get("input").type("alan's cool task");
    cy.get("form > button").click();
    cy.get("p").contains("alan's cool task");
  });
});
