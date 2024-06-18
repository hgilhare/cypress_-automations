describe('Cypress Assertions',()=>{
    it('implict assertions',()=>{

        /// should or and

        cy.visit("https://www.saucedemo.com/")
        cy.url().should('include','saucedemo')
        cy.url().should('contain','www.saucedemo')
        cy.url().should('eq','https://www.saucedemo.com/')

        cy.url().should('include','saucedemo')
        .should('contain','www.saucedemo')
        .and('eq','https://www.saucedemo.com/')
        .and('not.eq','kjhgfghj')


    })

})