describe('When NOT in Chrome', { browser: '!chrome' }, () => {
    it('Shows warning', () => {
      cy.get('[data-testid="browser-warning"]').should(
        'contain',
        'For optimal viewing, use Chrome browser'
      )
    })
  
    it('Links to browser compatibility doc', () => {
      cy.get('a.browser-compat')
        .should('have.attr', 'href')
        .and('include', 'browser-compatibility')
    })
  })