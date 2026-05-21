Cypress.Commands.add('login', (email, password) => {
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
