describe('LoginUI', function(){
    beforeEach(() =>{
        cy.visit('loginPageAddress')
        cy.get('loginPageElement1')
        cy.get('loginPageElement2')
        cy.get('loginPageElement3')
        cy.viewport(1200, 800)
    })

//     Mobile Responsiveness
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
        cy.get('signUpButtonElement').click()
        cy.url().should('contains', '/signup')
        cy.contains('Last Name');
    })
    
    
    //Forget password button is visible and redirects users to the 'Forgotten Password/Password Reset' page.
   
    it('Forgotten Password Visible and redirects users appropriately', function(){
        cy.get('forgottenPasswordButtonElement').should('be.visible')
        cy.get('forgottenPasswordButtonElement').contains('Forgot').click()
        cy.get('signUpButtonElement').contains('Back')
        cy.url().should('contains', '/reset')             
    })
    

        // Check that 'enter key' on the keyboard also work as login button
    it('Enter key in Email Box', function(){
        cy.get('emailInputBoxElement').type('validEmail{enter}')
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
    it('Enter key in Password Box', function(){
        cy.get('passwordBoxElement').type('{enter}')
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })

//____________________________________________________________________________    
    
    // SIGN-IN WITH EMAIL

        // Sign-in Buttons Visible
    it('Login and Sign-In With Google Button Visible', function(){
        cy.get('signInButton').should('be.visible')
        cy.get('signInPageElement').should('be.visible')
    })
        // Valid credentials
    it('Valid Credentials', function(){
        cy.get('emailInputBoxElement').type('araji@byteworks.com.ng')
        cy.get('passwordBoxElement').type('1234567')
        cy.get('signUpButtonElement').click()
        cy.url().should('contain', '/dashboard')
    })
        // Empty credentials
    it('Empty credentials', function(){
        cy.get('emailInputBoxElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Empty email, valid password
    it('Empty email, valid password', function(){
        cy.get('passwordBoxElement').type('1234567')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Empty email, invalid password
    it('Empty email, invalid password', function(){
        cy.get('passwordBoxElement').type('11234567')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Empty password, valid email
    it('Empty password, valid email', function(){
        cy.get('emailInputBoxElement').type('araji@byteworks.com.ng')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Empty password, invalid email
    it('Empty password, invalid email', function(){
        cy.get('emailInputBoxElement').type('aaraji@byteworks.com.ng')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Invalid email, valid password
    it('Invalid email, valid password', function(){
        cy.get('emailInputBoxElement').type('aaraji@byteworks.com.ng')
        cy.get('passwordBoxElement').type('1234567')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Invalid email, invalid password
    it('Invalid email, invalid password', function(){
        cy.get('emailInputBoxElement').type('aaraji@byteworks.com.ng')
        cy.get('passwordBoxElement').type('11234567')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Invalid password, valid email
    it('Invalid password, valid email', function(){
        cy.get('emailInputBoxElement').type('araji@byteworks.com.ng')
        cy.get('passwordBoxElement').type('11234567')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })
        // Invalid password, invalid email
    it('Invalid password, invalid email', function(){
        cy.get('emailInputBoxElement').type('aaraji@byteworks.com.ng')
        cy.get('passwordBoxElement').type('11234567')
        cy.get('signUpButtonElement').click()
        cy.get('errorMessageElement').should('contain', 'Invalid')
    })

//__________________________________________________________________________

    // SIGN-IN WITH GOOGLE
    it('Sign-In With Google', function(){
        cy.get('loginPageElement').should('be.visible').click()
    })
})
