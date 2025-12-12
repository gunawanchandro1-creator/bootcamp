import forgotPasswordPage from '../../support/QUIZ-4/ForgotPasswordPage'

describe('Scenario Verifikasi Fungsi Forgot Password', () => {

  it('TC01 - Submit forgot password dengan email valid', () => {

      forgotPasswordPage.visitPage()
      forgotPasswordPage.clickForgotPassword()
      forgotPasswordPage.inputEmail('Admin')
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
        .as('messages')
      forgotPasswordPage.clickResetBtn()

      cy.wait('@messages').its('response.statusCode').should('eq', 304)
  })

})
