/// <reference types="cypress" />

describe('Test Sauce Demo using Cypress', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
      })

    it('Should visit website', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.url().should("include", "saucedemo.com")
    });

    it('Testing', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            //Fill Username
            cy.get('[data-test="username"]').clear()
            cy.get('[data-test="username"]').type(username)
            //Fill Password
            cy.get('[data-test="password"]').clear()
            cy.get('[data-test="password"]').type(password)
            //Klik Button Login
            cy.get('[data-test="login-button"]').click()
            cy.url().should("include", "/inventory.html")
            //Add To Chart
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
            //Klik Keranjang
            cy.get('.shopping_cart_badge').click()
            cy.url().should('include', '/cart.html')
            //Klik Remove
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            //Klik Checkout
            cy.get('[data-test="checkout"]').click()
            cy.url().should("include", "/checkout-step-one.html")
            //Fill Form
            cy.get('[data-test="firstName"]').type("warda")
            cy.get('[data-test="lastName"]').type("tunnisa")
            cy.get('[data-test="postalCode"]').type("12290")
            //Klik Continue
            cy.get('[data-test="continue"]').click()
            cy.url().should("include", "/checkout-step-two.html")
            //Klik Finish
            cy.get('[data-test="finish"]').click()
            cy.url().should("include", "/checkout-complete.html")
            //Klik Back
            cy.get('[data-test="back-to-products"]').click()
            cy.url().should("include", "/inventory.html")
            //Logout
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').click()
        })
    });
});
