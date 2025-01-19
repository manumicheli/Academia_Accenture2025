const INPUT_EMAIL ='#email'
const INPUT_USER ='#username'
const INPUT_PASSWORD ='#password'
const INPUT_CONFIRM_PASSWORD ='#confirmpassword'
const BTN_SEND ='#sendemail'
const MENSAGEM_SUCESSO = '.sweet-alert'
const BNT_OK = '.confirm'
const CARREGAMENTO ='#LoadingPDF'

Cypress.Commands.add('preencherCamposForm5', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USER).type(Cypress.env('username'))
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('password'))
    cy.get(BTN_SEND).click()
    
    
})



Cypress.Commands.add('validarMensagemSucesso', () => {
    cy.get(CARREGAMENTO).should('be.visible')
    cy.get(MENSAGEM_SUCESSO, { timeout: 10000 }).should('be.visible')
    cy.get(MENSAGEM_SUCESSO).contains('Sending e-mail success')

})

Cypress.Commands.add('confirmaEnvio', () => {
    cy.get(BNT_OK).click()
})