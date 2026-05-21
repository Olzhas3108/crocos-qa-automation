import LoginPage from '../../support/pages/LoginPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('успешный вход с валидными данными', () => {
    cy.fixture('users').then((users) => {
      LoginPage.fillEmail(users.validUser.email);
      LoginPage.fillPassword(users.validUser.password);
      LoginPage.submit();
      cy.url().should('include', '/dashboard');
    });
  });

  it('ошибка при неверном пароле', () => {
    cy.fixture('users').then((users) => {
      LoginPage.fillEmail(users.invalidUser.email);
      LoginPage.fillPassword(users.invalidUser.password);
      LoginPage.submit();
      LoginPage.getErrorMessage().should('be.visible');
    });
  });

  it('поля обязательны для заполнения', () => {
    LoginPage.submit();
    cy.get('[data-cy=email]').should('have.attr', 'required');
    cy.get('[data-cy=password]').should('have.attr', 'required');
  });
});
