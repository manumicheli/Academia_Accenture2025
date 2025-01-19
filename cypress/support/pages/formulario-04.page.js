const SELECTION_OPTION = ':nth-child(4) > .ideal-radio'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('preencherCamposForm4', () => {
    cy.get(SELECTION_OPTION).click()
    cy.get(BTN_NEXT).click()
})