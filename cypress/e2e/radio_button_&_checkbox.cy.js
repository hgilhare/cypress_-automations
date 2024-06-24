

describe('radio button and check box',()=>{

    it('checkbox',()=>{
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get('input[type="checkbox" ][name="color"]').check().should("be.checked")
        

    })
    it('radio button',()=>{
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get('[checked=""]').check().should("be.checked")
        cy.get(':nth-child(33) > form > :nth-child(5)').should("not.be.checked")
        
    })



}

)