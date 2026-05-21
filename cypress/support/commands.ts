declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      loginWithFixture(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=password]').type(password);
  cy.get('[data-cy=submit]').click();
});

Cypress.Commands.add('loginWithFixture', () => {
  cy.fixture('users').then((users) => {
    cy.login(users.validUser.email, users.validUser.password);
  });
});
