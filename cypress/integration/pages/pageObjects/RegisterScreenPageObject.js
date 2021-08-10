export default class RegisterScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  }

  fillRegisterForm({ email, password }) {
    this.cy.get('#reg_email').type(email);
    this.cy.get('#reg_password').type(password);
    return this;
  }

  submitForm() {
    this.cy.get('input[name="register"]').click();
    return this;
  }
}
