describe('dropdowns',()=>{

    it("select dropdown",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Haiti').should('have.value','Haiti')

    })
    it('dropdown without select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Iran').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Iran')
    })
    it('auto suggestion dropdown',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('delhi')
        cy.get('h3.suggestion-title').contains("Delhi Sultanat").click()
    })
    it('count auto suggestion',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('input.Pke_EE').type('iphone')
        cy.get('li._3D0G9a>div').should('have.length',8)
        cy.get('span._1CzsRN').each(($el,$index,$list)=>{
            if($el.text()==" 13"){
                cy.wrap($el).click()
            }
        })
    })


})