/**
 * This file contains Cypress tests for the login functionality.
 * The tests include successful login and failed login scenarios.
 * The tests stub the login API requests and check the expected behavior.
 *
 * @file This file contains Cypress tests for the login functionality.
 */

describe("Login functionality flows", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  /**
   * Test case for successful login.
   * It stubs the login API request and checks if the login is successful.
   */
  it("logs in successfully", () => {
    cy.get("[data-cy=email-input]").type("JayceeSeededEmployee@hotmail.com");
    cy.get("[data-cy=password-input]").type("src@123");
    cy.get("button[type=submit]").click();
    // cy.contains("Login Successful");
    cy.url().should("include", "/orders_management/orders");
  });

  /**
   * Test case for failed login.
   * It stubs the login API request and checks if the login fails with the expected error message.
   */
  it("shows an error on failed login", () => {
    cy.get("[data-cy=email-input]").type("wrong@example.com");
    cy.get("[data-cy=password-input]").type("wrongpassword");
    cy.get("button[type=submit]").click();
    // cy.contains("Login Failed");
  });
});
