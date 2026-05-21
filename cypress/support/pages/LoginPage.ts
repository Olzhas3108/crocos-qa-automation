class LoginPage {
  visit(): void {
    cy.visit('/login');
  }

  fillEmail(email: string): void {
    cy.get('[data-cy=email]').clear().type(email);
  }

  fillPassword(password: string): void {
    cy.get('[data-cy=password]').clear().type(password);
  }

  submit(): void {
    cy.get('[data-cy=submit]').click();
  }

  getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=error-message]');
  }
}

export default new LoginPage();
