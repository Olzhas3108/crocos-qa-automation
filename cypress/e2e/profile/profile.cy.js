import ProfilePage from '../../support/pages/ProfilePage';

describe('Profile', () => {
  beforeEach(() => {
    cy.loginWithFixture();
    ProfilePage.visit();
  });

  it('отображает данные текущего пользователя', () => {
    cy.fixture('users').then((users) => {
      ProfilePage.getUserEmail().should('contain', users.validUser.email);
    });
  });

  it('успешное обновление имени', () => {
    ProfilePage.clickEditButton();
    ProfilePage.fillName('New Name');
    ProfilePage.saveChanges();
    ProfilePage.getSuccessMessage().should('be.visible');
    ProfilePage.getUserName().should('contain', 'New Name');
  });

  it('имя не может быть пустым', () => {
    ProfilePage.clickEditButton();
    ProfilePage.fillName(' ');
    ProfilePage.saveChanges();
    cy.get('[data-cy=name-error]').should('be.visible');
  });
});
