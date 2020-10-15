describe('Advance Forms', () => {
    
    beforeEach(() => cy.visit('http://localhost:3000'))

    describe('filling inputs and submit', () => {

        it('can type and see if the correct name', () => {
            cy.get('input[name=name]')
             .type('Carlos Colindres')
             .should('have.value', 'Carlos Colindres')
            
             cy.get('input[name=email]')
            .type('stingaree43@gmail.com')

            cy.get('input[name=password]')
            .type('123456789')

            cy.get('input[name=terms]')
            .click()

            cy.get('#submit-btn')
            .click()
        })
    })

    describe('Filling out inputs and cancelling', () => {
        it('submit button is disabled', () => {
            cy.get('#submit-btn').should('be.disabled')
        })
    })
})