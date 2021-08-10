/// <reference types="cypress" />

import LoginScreenPageObject from './pageObjects/LoginScreenPageObject';

describe('lojaebac.ebaconline.art.br/minha-conta/', () => {
  describe('when fill and submit a form login request', () => {
    it('should go to the my account page', () => {
      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({
          username: 'aluno_ebac@gmail.com',
          password: 'teste@teste',
        })
        .submitForm();

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
        'contain',
        'Olá, aluno'
      );
      cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should(
        'contain',
        'A partir do painel de controle de sua conta'
      );
    });
  });

  describe('when username or email address is invalid', () => {
    it('should show an error message', () => {
      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({
          username: 'wrong-email',
          password: 'teste@teste',
        })
        .submitForm();

      cy.get('.woocommerce-error > li').should(
        'contain',
        'Erro: O usuário wrong-email não está registrado neste site'
      );
    });
  });

  describe('when password is invalid', () => {
    it('should show an error message', () => {
      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen
        .fillLoginForm({
          username: 'aluno_ebac@gmail.com',
          password: 'wrong-password',
        })
        .submitForm();

      cy.get('.woocommerce-error > li').should(
        'contain',
        'Erro: A senha fornecida para o e-mail aluno_ebac@gmail.com está incorreta.'
      );
    });
  });
});
