/// <reference types="cypress" />

describe ('My First Test', () => {
    it('Clicking "type" show the right holdings ', () => {
        cy.visit('/login.html')

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('#email1')
            .type('wardatunnisa2001@gmail.com')
            .should('have.value', 'wardatunnisa2001@gmail.com')
    })
})