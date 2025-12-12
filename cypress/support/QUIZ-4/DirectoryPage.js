class directoryPage {

    clickMenuDirectory(){
        cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    }

    assertionDirectoryPage(){
        cy.url().should('include', '/directory')
        cy.get('.oxd-text--h6').should('contain', 'Directory')
    }

}

export default new directoryPage()
