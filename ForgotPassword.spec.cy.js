describe('Forget Password Spec', function(){
    beforeEach(() =>{
        cy.visit('webAddress')      
        cy.get('loginElement').click()
        cy.get('backToLoginButton').should('contain', 'Back to Login')
        cy.get('emailInputTextBox').should('contain', 'your Email')
        // cy.viewport(1200, 200)
    })
        // Mobile Resposiveness 
    
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
    it('Valid Email',function() {
        cy.get('emailTextBoxElement').type('validEmail{enter}')
        cy.get('successMessageElement').should('contain', 'visit the signup page')
    })

    // Wrong Email For Error Message Test
    it('Wrong Email',function() {
        cy.get('emailTextBoxElement').type('invalidEmail{enter}')
        cy.get('successMessageElement').should('contain', 'visit the signup page')
    })

    // Empty Email
    it('Empty Email',function() {
        cy.get('emailTextBoxElement').click()
        cy.get('errorMessageElement').should('contain', 'errorMessageElementText')
    })
    
    // Back to Login Button
    it('Back to Login Button', function(){
        cy.get('backToLoginElement').click()
        cy.get('loginButton')
        cy.get('homePageElement1')
        cy.get('homePageElement2')
    })


})
