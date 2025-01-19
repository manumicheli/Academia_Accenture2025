Given('que o usuario esta na pagina inicial da Tricents', () => {
    cy.visit('/')
})


When  ('o usuario aperta na opçao Automobile Insurance',()=>{
    cy.acessarAbaAutomobile()
})

And ('preenche todos os campos de info da aba Enter Vehicle Data e aperta next',() => {
    cy.preencherAbaVehicleData()
})

And ('preenche todos os campos de info da aba Enter Insurant Data e aperta next',() => {
    cy.preencherCamposForm2()
})


And ('preenche todos os campos de info da aba Enter Product Data e aperta next',() => {
    cy.preencherCamposForm3()
})

And ('preenche todos os campos de info da aba select Price Option e aperta next',() => {
    cy.preencherCamposForm4()
})

And ('preenche todos os campos de info da aba Send Quote e aperta send', () => {
    cy.preencherCamposForm5()
 })
 

Then ('o usuario visualiza na tela uma mensagem de sucesso no envio', () => {
   cy.validarMensagemSucesso()
})

And ('clica no botao OK para fechar a mensagem', () => {
    cy.confirmaEnvio()
})