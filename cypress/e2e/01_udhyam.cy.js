

describe("udhyam page loading duration check",()=>{
    it('page load',()=>{
        cy.viewport(1280,720)
        cy.visit("https://udyamregistration.gov.in/PrintUdyamApplication.aspx")
        cy.xpath("(//a[@href='#'])[3]").should('exist')
        
    })
})