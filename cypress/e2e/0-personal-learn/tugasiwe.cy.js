describe ("Working with inputs", () => {
    it('Should load login website', () => {
        cy.visit(" http://zero.webappsecurity.com/login.html", {timeout: 10000})
        cy.url().should("include", "login.html")

        cy.get('#user_login').clear()
        cy.get('#user_login').type("username")

        cy.get('#user_password').clear()
        cy.get('#user_password').type("password")

        cy.get('#user_remember_me').click()
    });

})