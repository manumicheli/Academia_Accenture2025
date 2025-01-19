const SELECT_MAKE ='select#make'
const INPUT_ENGINEPERFORMANCE ='#engineperformance'
const SELECT_DATEOFMANUFACTURE = '#dateofmanufacture'
const SELECT_NUMEROFSEATS ='#numberofseats'
const SELECT_FUELTYPE = '#fuel'
const INPUT_LISTPRICE = '#listprice'




Cypress.Commands.add('preencherForm1Errado', () => {
    cy.get(SELECT_MAKE).select('BMW').click
    cy.get(INPUT_ENGINEPERFORMANCE).type('180')
    cy.get(SELECT_DATEOFMANUFACTURE).type('01/15/2025')
    cy.get(SELECT_NUMEROFSEATS).select('1').click
    cy.get(SELECT_FUELTYPE).select('Diesel').click
    cy.get(INPUT_LISTPRICE).type('milreais')
    
})
