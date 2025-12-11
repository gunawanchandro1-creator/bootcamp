import loginPage from "../../support/LoginPage.js"
import loginData from "../../fixtures/loginData.json"

describe('Scenario Verifikasi Fungsi Login (POM)', () => {

    it('TC001 - Login dengan username valid & password valid', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.clickLoginBtn()
        loginPage.assertionDashboard()
    })

    it('TC002 - Login dengan username salah', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.invalidUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.clickLoginBtn()
        loginPage.assertionInvalidCred()
    })

    it('TC003 - Login dengan password salah', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.validUsername)
        loginPage.inputPassword(loginData.invalidPassword)
        loginPage.clickLoginBtn()
        loginPage.assertionInvalidCred()
    })

    it('TC004 - Login dengan field kosong', () => {
        loginPage.visitPage()
        loginPage.clickLoginBtn()
        loginPage.assertionRequiredField()
    })

    it('TC005 - Login dengan format username tidak valid', () => {
        loginPage.visitPage()
        loginPage.inputUsername(loginData.invalidFormatUsername)
        loginPage.inputPassword(loginData.validPassword)
        loginPage.clickLoginBtn()
        loginPage.assertionInvalidCred()
    })

})
