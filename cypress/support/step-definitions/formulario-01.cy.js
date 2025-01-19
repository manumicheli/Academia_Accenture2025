Given('que estou na pagina inicial da Tricents', () => {
    cy.visit('/')
})

When  ('aperto na opção Automobile Insurance',()=>{
    cy.acessarAbaAutomobile()
})

And ('preencho todos os campos de informações da aba Enter Vehicle Data e aperto next',() => {
    cy.preencherAbaVehicleData()
})

And ('preencho todos os campos de informações da aba Enter Insurant Data e aperto next',() => {
    cy.preencherCamposForm2()
})


And ('preencho todos os campos de informações da aba Enter Product Data e aperto next',() => {
    cy.preencherCamposForm3()
})

And ('preencho todos os campos de informações da aba Enter Price Option e aperto next',() => {
    cy.preencherCamposForm4()
})

Then ('preencho todos os campos de informações da aba Send Quote e aperto send',() => {
    cy.preencherCamposForm5()
 })
 