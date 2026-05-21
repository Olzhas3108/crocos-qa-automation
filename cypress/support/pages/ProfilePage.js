class ProfilePage {
  visit() {
    cy.visit('/profile');
  }

  getUserName() {
    return cy.get('[data-cy=user-name]');
  }

  getUserEmail() {
    return cy.get('[data-cy=user-email]');
  }

  clickEditButton() {
    cy.get('[data-cy=edit-profile]').click();
  }

  fillName(name) {
    cy.get('[data-cy=name-input]').clear().type(name);
  }

  saveChanges() {
    cy.get('[data-cy=save-button]').click();
  }

  getSuccessMessage() {
    return cy.get('[data-cy=success-message]');
  }
}

export default new ProfilePage();
