describe('Smoke', () => {
  it('главная страница открывается', () => {
    cy.visit('/');
    cy.get('body').should('be.visible');
  });

  it('страница логина открывается', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').should('exist');
    cy.get('[data-cy=password]').should('exist');
  });

  it('страница регистрации открывается', () => {
    cy.visit('/register');
    cy.get('[data-cy=submit]').should('exist');
  });

  it('редирект на логин для неавторизованного пользователя', () => {
    cy.visit('/profile');
    cy.url().should('include', '/login');
  });
});
