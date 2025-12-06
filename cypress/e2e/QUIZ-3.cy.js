it('TC01 - Login dengan username valid & password valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')
            .should('have.value', 'Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('button[type="submit"]')
            .should('be.visible')
            .click()

        cy.url().should('include', '/dashboard')
    })

    it('TC02 - Login dengan username salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin123')
            .should('have.value', 'Admin123')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert-content')
            .should('contain', 'Invalid credentials')
    })

     it('TC03 - Login dengan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin')

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert-content')
            .should('contain', 'Invalid credentials')
    })

    it('TC04 - Login dengan field kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
            .should('contain', 'Required')

    })
    
    it('TC05 - Login dengan format username tidak valid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('@@@!!!')
            .should('have.value', '@@@!!!')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert-content-text')
            .should('contain', 'Invalid credentials')
    })
    