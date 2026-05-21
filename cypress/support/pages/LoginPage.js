class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('[data-cy=email]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('[data-cy=password]').clear().type(password);
  }

  submit() {
    cy.get('[data-cy=submit]').click();
  }

  getErrorMessage() {
    return cy.get('[data-cy=error-message]');
  }
}

export default new LoginPage();
