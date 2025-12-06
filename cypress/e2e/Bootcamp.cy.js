describe ('Scenario Verifikasi Fungsi Login', ()=>{
it('TC001-Login dengan username valid & password valid',()=>{
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user').should('have.value','standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')    
    cy.get('.btn_action').should('be.visible')
    cy.get('.btn_action').click()
    cy.url().should('include','inventory')
})
})