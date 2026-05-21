class ProfilePage {
  visit(): void {
    cy.visit('/profile');
  }

  getUserName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=user-name]');
  }

  getUserEmail(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=user-email]');
  }

  clickEditButton(): void {
    cy.get('[data-cy=edit-profile]').click();
  }

  fillName(name: string): void {
    cy.get('[data-cy=name-input]').clear().type(name);
  }

  saveChanges(): void {
    cy.get('[data-cy=save-button]').click();
  }

  getSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-cy=success-message]');
  }
}

export default new ProfilePage();
