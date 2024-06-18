


describe('swaglab test',function()
{
  it('login page',function(){
    cy.visit("https://www.saucedemo.com/")
    cy.title().should('eq','Swag Labs')
    cy.get("input#user-name").type("standard_user")
    cy.get("input#password").type("secret_sauce")
    cy.get("input#login-button").click()
    cy.title().should('eq','Swag Labs')
    cy.xpath("//div[@class='inventory_item']").should('have.length',6)
    
  })
}
)