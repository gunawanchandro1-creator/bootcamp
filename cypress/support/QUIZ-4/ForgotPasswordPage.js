class forgotPasswordPage {

    visitPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    clickForgotPassword(){
        cy.get('.orangehrm-login-forgot').click()
    }

    inputEmail(email){
        cy.get('input[placeholder="Username"]').type(email)
    }

    clickResetBtn(){
        cy.get('button[type="submit"]').click()
    }

    assertionSuccess(){
        cy.get('.orangehrm-forgot-password-title')
          .should('contain', 'Reset Password link sent successfully')
    }
}

export default new forgotPasswordPage()
