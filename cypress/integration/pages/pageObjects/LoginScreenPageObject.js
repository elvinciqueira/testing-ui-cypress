export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  }

  fillLoginForm({ username, password }) {
    this.cy.get('#username').type(username);
    this.cy.get('#password').type(password);
    return this;
  }

  submitForm() {
    this.cy.get('.woocommerce-form > .button').click();
    return this;
  }
}
