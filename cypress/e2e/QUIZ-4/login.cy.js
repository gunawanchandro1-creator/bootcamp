import loginPage from '../../support/QUIZ-4/LoginPage'
import loginData from '../../fixtures/QUIZ-4/loginData.json'

describe('Scenario Verifikasi Fungsi Login', () => {

  it('TC01 - Login menggunakan username & password valid', () => {
      loginPage.visitPage()
      loginPage.inputUsername(loginData.validUsername)
      loginPage.inputPassword(loginData.validPassword)
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary')
        .as('actionSumarry')
      loginPage.clickLoginBtn()

      cy.wait('@actionSumarry').its('response.statusCode').should('eq', 200)
      loginPage.assertionDashboard()
  })

  it('TC02 - Login invalid credential', () => {
      loginPage.visitPage()
      loginPage.inputUsername(loginData.invalidUsername)
      loginPage.inputPassword(loginData.invalidPassword)
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
        .as('messages')
      loginPage.clickLoginBtn()

      cy.wait('@messages').its('response.statusCode').should('eq', 304)
      loginPage.assertionInvalidCred()
  })

  it('TC03 - Username dan password kosong', () => {
      loginPage.visitPage()
      loginPage.clickLoginBtn()
      loginPage.assertionRequiredField()
  })

  it('TC04 - Invalid format username', () => {
      loginPage.visitPage()
      loginPage.inputUsername(loginData.invalidFormatUsername)
      loginPage.inputPassword(loginData.validPassword)
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages')
        .as('messages')
      loginPage.clickLoginBtn()

      cy.wait('@messages').its('response.statusCode').should('eq', 304)
      loginPage.assertionInvalidCred()
  })

})
