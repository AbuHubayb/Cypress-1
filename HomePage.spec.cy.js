describe('Login Scripts', () => {
    beforeEach(function(){
        cy.visit('https://pilot.dentaldoor.com/')
        // cy.get('[data-cy="I’m a Dental Professional"]')
        // cy.get('[data-cy="I Own A Dental Office"]')
        cy.url().should('eq', 'https://pilot.dentaldoor.com/')
        cy.viewport(1920, 1000)
    })

    it('Mobile Responsiveness Portrait', () => {
        cy.viewport('macbook-15')
        cy.ScrollUI()
        cy.viewport('macbook-13')
        cy.ScrollUI()
        cy.viewport('macbook-11')
        cy.ScrollUI()
        cy.viewport('ipad-2')
        cy.ScrollUI()
        cy.viewport('ipad-mini')
        cy.ScrollUI()
        cy.viewport('iphone-6+')
        cy.ScrollUI()
        cy.viewport('iphone-6')
        cy.ScrollUI()
        cy.viewport('iphone-5')
        cy.ScrollUI()
        cy.viewport('iphone-4')
        cy.ScrollUI()
        cy.viewport('iphone-3')
        cy.ScrollUI()
        cy.viewport(2000, 1250)
        cy.ScrollUI()
    })

    it('Mobile Responsiveness Landscape', () => {
        cy.viewport('macbook-15', 'landscape')
        cy.wait(1500)
        cy.viewport('macbook-15', 'landscape')
        cy.wait(2000)
        cy.viewport('macbook-13', 'landscape')
        cy.ScrollUI()
        cy.viewport('macbook-11', 'landscape')
        cy.ScrollUI()
        cy.viewport('ipad-2', 'landscape')
        cy.ScrollUI()
        cy.viewport('ipad-mini', 'landscape')
        cy.ScrollUI()
        cy.viewport('iphone-6+', 'landscape')
        cy.ScrollUI()
        cy.viewport('iphone-6', 'landscape')
        cy.ScrollUI()
        cy.viewport('iphone-5', 'landscape')
        cy.ScrollUI()
        cy.viewport('iphone-4', 'landscape')
        cy.ScrollUI()
        cy.viewport('iphone-3', 'landscape')
        cy.ScrollUI()
        cy.viewport(2000, 1250)
        cy.ScrollUI()
    })

    it('Sign-In Button', function(){
        cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()
        cy.get('.login-title')
        cy.get('.login-subtitle')
        cy.url().should('contains', '/auth/realms/dentaldoor/')
    })

    it('LandingPage Logo', () => {
        cy.get('.navbar-brand > .logo').click()
        cy.get('[data-cy="I own a Dental Office"]')
        cy.get('[data-cy="I’m a Dental Professional"]')
        cy.url().should('eq', 'https://pilot.dentaldoor.com/')
    })
})