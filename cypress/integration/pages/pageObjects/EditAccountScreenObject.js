export default class RegisterScreenPageObject {
  constructor(cy) {
    this.cy = cy;
  }

  goToEditAccount() {
    this.cy
      .get('.woocommerce-MyAccount-navigation-link--edit-account > a')
      .click();
    this.cy.url().should('include', '/edit-account/');
    return this;
  }

  fillFirstAndLastName({ firstName, lastName }) {
    this.cy.get('input[name="account_first_name"]').type(firstName);
    this.cy.get('input[name="account_last_name"]').type(lastName);
    return this;
  }

  saveChanges() {
    this.cy.get('.woocommerce-Button').click();
    return this;
  }
}
