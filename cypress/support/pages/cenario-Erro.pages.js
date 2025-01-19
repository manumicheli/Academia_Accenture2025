const BTN_ACESSA_AUTOMOBILE = '#nav_automobile'
const SELECT_MAKE ='select#make'
const INPUT_ENGINEPERFORMANCE ='#engineperformance'
const SELECT_DATEOFMANUFACTURE = '#dateofmanufacture'
const SELECT_NUMEROFSEATS ='#numberofseats'
const SELECT_FUELTYPE = '#fuel'
const INPUT_LISTPRICE = '#listprice'
const INPUT_AnnualMileage = '#annualmileage'
const VALIDA_ERRO_LISTPRICE = '.error';



Cypress.Commands.add('preencherForm1Errado', () => {
    cy.get(BTN_ACESSA_AUTOMOBILE).click()
    cy.get(SELECT_MAKE).select('BMW').click
    cy.get(INPUT_ENGINEPERFORMANCE).type('180')
    cy.get(SELECT_DATEOFMANUFACTURE).type('01/15/2025')
    cy.get(SELECT_NUMEROFSEATS).select('1').click
    cy.get(SELECT_FUELTYPE).select('Diesel').click
    cy.get(INPUT_LISTPRICE).type('milreais')
    
    
})

Cypress.Commands.add('validarErro', () => {
cy.get(VALIDA_ERRO_LISTPRICE)
        .should('be.visible') // Valida que a mensagem de erro está visível
        .and('contain.text', 'Must be a number between 500 and 100000')
        })