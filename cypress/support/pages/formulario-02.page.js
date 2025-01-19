const INPUT_FIRST_NAME = '#firstname'      
const INPUT_LAST_NAME = '#lastname'
const SELECT_DATE_BIRTH ='#birthdate'
const SELECT_GENDER = ':nth-child(4) > .group > :nth-child(2)'
const INPUT_ADDRESS = '#streetaddress'
const SELECT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const SELECT_OCCUPATION = '#occupation'
const SELECT_HOBBIES = 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)'
const INPUT_WEB_SITE= '#website'
const BNT_PICTURE='#open'
const BNT_NEXT ='#nextenterproductdata'

Cypress.Commands.add('preencherCamposForm2', () => {
    cy.get(INPUT_FIRST_NAME).type('Manoela')
    cy.get(INPUT_LAST_NAME).type('Micheli')
    cy.get(SELECT_DATE_BIRTH).type('03/09/1995')
    cy.get(SELECT_GENDER).type('Female')
    cy.get(INPUT_ADDRESS).type('Rua belo horizonte')
    cy.get(SELECT_COUNTRY).select('Brazil').click
    cy.get(INPUT_ZIP_CODE).type('31220')
    cy.get(INPUT_CITY).type('Belo Horizonte')
    cy.get(SELECT_OCCUPATION).select('Public Official').click
    cy.get(SELECT_HOBBIES).type('Speeding').click
    cy.get(INPUT_WEB_SITE).type('https://www.google.com')
    cy.get(BNT_PICTURE).click()
    cy.get(BNT_NEXT).click()
    })

    