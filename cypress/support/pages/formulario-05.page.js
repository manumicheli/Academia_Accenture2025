const INPUT_EMAIL ='#email'
const INPUT_USER ='#username'
const INPUT_PASSWORD ='#password'
const INPUT_CONFIRM_PASSWORD ='#confirmpassword'
const BTN_SEND ='#sendemail'




Cypress.Commands.add('preencherCamposForm5', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USER).type(Cypress.env('username'))
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('password'))
    cy.get(BTN_SEND).click()
    
    
})