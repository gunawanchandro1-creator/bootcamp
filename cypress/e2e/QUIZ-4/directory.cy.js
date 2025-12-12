import loginPage from '../../support/QUIZ-4/LoginPage'
import directoryPage from '../../support/QUIZ-4/DirectoryPage'
import loginData from '../../fixtures/QUIZ-4/loginData.json'

describe('Scenario Verifikasi Menu Directory', () => {

    beforeEach(() => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.clickLoginBtn()   
    })

    it('TC01 - Buka halaman Directory', () => {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0')
        .as('directory')
        directoryPage.clickMenuDirectory()
        
        cy.wait('@directory').its('response.statusCode').should('eq', 200)
        directoryPage.assertionDirectoryPage()
    })

})
