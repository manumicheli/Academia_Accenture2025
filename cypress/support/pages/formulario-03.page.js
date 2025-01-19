const SELECT_START_DATE= '#startdate'
const SELECT_INSURACE='#insurancesum'
const SELECT_MERIT='#meritrating'
const SELECT_DAMAGE='#damageinsurance'
const SELECT_OPTIONAL='label.ideal-radiocheck-label'
const SELETC_COURTESY ='#courtesycar'
const BNT_NEXT ='#nextselectpriceoption'


Cypress.Commands.add('preencherCamposForm3', () => {
    cy.get(SELECT_START_DATE).type('08/13/2025')
    cy.get(SELECT_INSURACE).select('7.000.000,00').click
    cy.get(SELECT_MERIT).select('Bonus 7').click
    cy.get(SELECT_DAMAGE).select('Full Coverage').click
    cy.get(SELECT_OPTIONAL).contains('Euro Protection').click()
    cy.get(SELETC_COURTESY).select('Yes').click
    cy.get(BNT_NEXT).click()
    })