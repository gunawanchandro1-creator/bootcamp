class loginPage {

    visitPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    inputUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type(username, {delay: 0})
    }

    inputPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type(password, {delay: 0})
    }

    clickLoginBtn(){
        cy.get('button[type="submit"]').should('be.visible').click()
    }

    assertionDashboard(){
        cy.url().should('include', '/dashboard')
    }

    assertionInvalidCred(){
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    }

    assertionRequiredField(){
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
          .should('contain', 'Required')
    }
}

export default new loginPage()
