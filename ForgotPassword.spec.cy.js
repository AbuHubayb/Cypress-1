describe('LoginUI', function(){
    beforeEach(() =>{
        cy.visit('https://pilot.dentaldoor.com/auth/realms/dentaldoor/protocol/openid-connect/auth?client_id=dentaldoor-frontend&redirect_uri=https%3A%2F%2Fpilot.dentaldoor.com%2Fdashboard&state=fb66b02d-27eb-482d-9e3a-3d3c98909f69&response_mode=fragment&response_type=code&scope=openid%20offline_access&nonce=1a120176-f4e1-4e04-829f-1d54be1394ee&prompt=login')      
        cy.get('.login-pf-settings > :nth-child(2)').click()
        cy.get('span > a').should('contain', 'Back to Login')
        cy.get('.pf-c-form__label').should('contain', 'your Email')
        // cy.viewport(1200, 200)
    })

    it('Mobile Responsiveness Portrait', () => {
        cy.viewport('macbook-15')
        cy.wait(1500)
        cy.viewport('macbook-15')
        cy.wait(2000)
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

    // Valid Email
    // it('Valid Email',function() {
    //     cy.get('#username').type('araji@byteworks.com.ng{enter}')
    //     cy.get('.pf-c-alert__title').should('contain', 'visit the signup page')
    // })

    // Wrong Email
    it('Wrong Email',function() {
        cy.get('#username').type('playing@play.com{enter}')
        cy.get('.pf-c-alert__title').should('contain', 'visit the signup page')
    })

    // Empty Email
    it('Empty Email',function() {
        cy.get('.pf-c-button').click()
        cy.get('#input-error-username').should('contain', 'Please specify email')
    })
    
    // Back to Login Button
    it('Back to Login Button', function(){
        cy.get('span > a').click()
        cy.get('#kc-login')
        cy.get('span > .login-action-link')
        cy.get('.kc-social-provider-name')
    })


})