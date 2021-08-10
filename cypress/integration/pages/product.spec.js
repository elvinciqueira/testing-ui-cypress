/// <reference types="cypress" />

import ProductScreenPageObject from './pageObjects/ProductScreenPageObject';

describe('lojaebac.ebaconline.art.br/products', () => {
  describe('when user click on an product', () => {
    describe('and select size and color', () => {
      it('should add to cart', () => {
        const quantity = 2;
        const productName = 'Aether Gym Pant';
        const productScreen = new ProductScreenPageObject(cy);

        productScreen
          .chooseProduct(productName)
          .selectSize('34')
          .selectColor('Blue')
          .addQuantity(quantity)
          .addToCart();

        cy.get('.dropdown-toggle > .mini-cart-items').should(
          'contain',
          quantity
        );
        cy.get('.woocommerce-message').should(
          'contain',
          `${quantity} × “${productName}” foram adicionados no seu carrinho.`
        );
      });
    });
  });
});
