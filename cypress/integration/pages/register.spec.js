/// <reference types="cypress" />

import { getUser } from '../utils/fakerUtils';
import RegisterScreenPageObject from './pageObjects/RegisterScreenPageObject';
import EditAccountScreenObject from './pageObjects/EditAccountScreenObject';

describe('lojaebac.ebaconline.art.br/minha-conta/edit-account/', () => {
  describe('when fill and submit a form register request', () => {
    it('should complete the registration successfully', () => {
      const { email, firstName, lastName, password } = getUser();
      const registerScreen = new RegisterScreenPageObject(cy);
      const editAccountScreen = new EditAccountScreenObject(cy);

      registerScreen
        .fillRegisterForm({
          email,
          password,
        })
        .submitForm();

      editAccountScreen
        .goToEditAccount()
        .fillFirstAndLastName({
          firstName,
          lastName,
        })
        .saveChanges();

      cy.get('div[role="alert"]').should(
        'contain',
        'Detalhes da conta modificados com sucesso.'
      );
    });
  });
});
