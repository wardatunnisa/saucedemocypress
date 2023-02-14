/// <reference types="cypress" />

describe ("Working with inputs", () => {

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
      })

    it('Should visit website', () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.url().should("include", "login.html")
    });

    it('fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type("username")
    });
        
    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type("password")
    });
        
    it('Should checklist button', () => {
        cy.get('#user_remember_me').click()
    });

    it('Should try to this', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)

            cy.get('#user_remember_me').click()

            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
        })
    });
});