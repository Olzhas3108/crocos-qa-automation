describe('Register', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('успешная регистрация нового пользователя', () => {
    cy.fixture('users').then((users) => {
      cy.get('[data-cy=name]').type(users.newUser.name);
      cy.get('[data-cy=email]').type(users.newUser.email);
      cy.get('[data-cy=password]').type(users.newUser.password);
      cy.get('[data-cy=submit]').click();
      cy.url().should('include', '/dashboard');
    });
  });

  it('ошибка при уже существующем email', () => {
    cy.fixture('users').then((users) => {
      cy.get('[data-cy=name]').type(users.newUser.name);
      cy.get('[data-cy=email]').type(users.validUser.email);
      cy.get('[data-cy=password]').type(users.newUser.password);
      cy.get('[data-cy=submit]').click();
      cy.get('[data-cy=error-message]').should('contain', 'already exists');
    });
  });

  it('ссылка на страницу входа работает', () => {
    cy.get('[data-cy=login-link]').click();
    cy.url().should('include', '/login');
  });
});
