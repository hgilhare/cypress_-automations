

describe('Cypress Assertions',()=>{
    it('implict assertions',()=>{

        /// should or and
        cy.viewport(1280,720)

        cy.visit("https://www.saucedemo.com/")
        cy.url().should('include','saucedemo')
        cy.url().should('contain','www.saucedemo')
        cy.url().should('eq','https://www.saucedemo.com/')

        cy.url().should('include','saucedemo')
        .should('contain','www.saucedemo')
        .and('eq','https://www.saucedemo.com/')
        .and('not.eq','kjhgfghj')  //// negative assertions

        cy.get('.login_logo').should('be.visible') /// is displayed
        cy.get('.login_logo').should('exist') 
    })
    it('explicit assertions',()=>{
        cy.viewport(1280,720)
        cy.visit("https://hrmssync.tartanhq.com/")
        cy.get('#username').type("Himanshu.gilhare@tartanhq.com")
        cy.get('#password').type("Himanshu@08")
        cy.get('.chakra-button').click()
        let expectedname= "👋 Welcome Himanshu!";
        cy.get('.text-grey-800').then((x)=>{
            let actualname=x.text()
            //BDD
            expect(expectedname).to.equal(actualname)
            ///for not equal --- to.not.equal(actualname)

            //TDD
            assert.equal(actualname,expectedname)
            
        })
    })
    

})