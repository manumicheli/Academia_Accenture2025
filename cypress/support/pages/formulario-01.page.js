const BTN_ACESSA_AUTOMOBILE = '#nav_automobile'
const SELECT_MAKE ='select#make'
const INPUT_ENGINEPERFORMANCE ='#engineperformance'
const SELECT_DATEOFMANUFACTURE = '#dateofmanufacture'
const SELECT_NUMEROFSEATS ='#numberofseats'
const SELECT_FUELTYPE = '#fuel'
const INPUT_LISTPRICE = '#listprice'
const INPUT_AnnualMileage = '#annualmileage'
const BNT_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('acessarAbaAutomobile', () => {
cy.get(BTN_ACESSA_AUTOMOBILE).click()
})

Cypress.Commands.add('preencherAbaVehicleData', () => {
    cy.get(BTN_ACESSA_AUTOMOBILE).click()
    cy.get(SELECT_MAKE).select('BMW').click
    cy.get(INPUT_ENGINEPERFORMANCE).type('180')
    cy.get(SELECT_DATEOFMANUFACTURE).type('01/15/2025')
    cy.get(SELECT_NUMEROFSEATS).select('1').click
    cy.get(SELECT_FUELTYPE).select('Diesel').click
    cy.get(INPUT_LISTPRICE).type('10000')
    cy.get(INPUT_AnnualMileage).type('60000')
    cy.get(BNT_NEXT).click()
})

