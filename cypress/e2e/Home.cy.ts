/// <reference types="cypress" />

describe("Test home page", () => {
  beforeEach(() => {
    cy.visit("/home");
  });
  it("on home page user can see poster slogan", () => {
    cy.viewport(767, 1080);
    cy.get("#slogan").should("be.visible");
  });
});
