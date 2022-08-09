describe('LoginUI', function(){
    beforeEach(() =>{
        cy.visit('https://pilot.dentaldoor.com/auth/realms/dentaldoor/protocol/openid-connect/auth?client_id=dentaldoor-frontend&redirect_uri=https%3A%2F%2Fpilot.dentaldoor.com%2Fdashboard&state=fb66b02d-27eb-482d-9e3a-3d3c98909f69&response_mode=fragment&response_type=code&scope=openid%20offline_access&nonce=1a120176-f4e1-4e04-829f-1d54be1394ee&prompt=login')
        cy.get('#kc-login')
        cy.get('span > .login-action-link')
        cy.get('.kc-social-provider-name')
        cy.viewport(1200, 800)
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
 
 //__________________________________________________________________________________________________
 
    // SIGN-UP Button
    it('Sign-Up Button',function() {
        cy.get('[style="font-size:14px; padding-top:10px; text-align: center;"] > .login-action-link').click()
        cy.url().should('contains', '/signup')
        cy.contains('Last Name');
    })
    
    
    //Forget password button is visible and redirects users to the 'Forgotten Password/Password Reset' page.
    it('Forgotten Password Visible and redirects users appropriately', function(){
        cy.get('span > .login-action-link').should('be.visible')
        cy.get('span > .login-action-link').contains('Forgot').click()
        cy.get('span > a').contains('Back')
        cy.url().should('contains', '/reset')             
    })

    // Check that 'enter key' on the keyboard also work as login button
    it('Enter key in Email Box', function(){
        cy.get('#username').type('araji@byteworks.com.ng{enter}')
        cy.get('#input-error').should('contain', 'Invalid')
    })
    it('Enter key in Password Box', function(){
        cy.get('#password').type('{enter}')
        cy.get('#input-error').should('contain', 'Invalid')
    })

//____________________________________________________________________________    
    
    // SIGN-IN WITH EMAIL

    // Sign-in Buttons Visible
    it('Login and Sign-In With Google Button Visible', function(){
        cy.get('#kc-login').should('be.visible')
        cy.get('.kc-social-provider-name').should('be.visible')
    })
        // Valid credentials
    it('Valid Credentials', function(){
        cy.get('#username').type('araji@byteworks.com.ng')
        cy.get('#password').type('1234567')
        cy.get('#kc-login').click()
        cy.url().should('contain', '/dashboard')
    })
        // Empty credentials
    it('Empty credentials', function(){
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Empty email, valid password
    it('Empty email, valid password', function(){
        cy.get('#password').type('1234567')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Empty email, invalid password
    it('Empty email, invalid password', function(){
        cy.get('#password').type('11234567')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Empty password, valid email
    it('Empty password, valid email', function(){
        cy.get('#username').type('araji@byteworks.com.ng')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Empty password, invalid email
    it('Empty password, invalid email', function(){
        cy.get('#username').type('aaraji@byteworks.com.ng')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Invalid email, valid password
    it('Invalid email, valid password', function(){
        cy.get('#username').type('aaraji@byteworks.com.ng')
        cy.get('#password').type('1234567')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Invalid email, invalid password
    it('Invalid email, invalid password', function(){
        cy.get('#username').type('aaraji@byteworks.com.ng')
        cy.get('#password').type('11234567')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Invalid password, valid email
    it('Invalid password, valid email', function(){
        cy.get('#username').type('araji@byteworks.com.ng')
        cy.get('#password').type('11234567')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })
        // Invalid password, invalid email
    it('Invalid password, invalid email', function(){
        cy.get('#username').type('aaraji@byteworks.com.ng')
        cy.get('#password').type('11234567')
        cy.get('#kc-login').click()
        cy.get('#input-error').should('contain', 'Invalid')
    })

//__________________________________________________________________________

    // SIGN-IN WITH GOOGLE
    it('Sign-In With Google', function(){
        cy.get('.kc-social-provider-name').should('be.visible').click()
    })
})