Given('que o usuário está na pagina de formulário 1', () => {
    cy.visit('/app.php')
})

When('preenche todos os campos de forma correta exceto o campo list price',()=>{
    cy.preencherForm1Errado()
})
Then ('aparece uma mensagem de erro ao lado do campo - Must be a number between 500 and 100000', () => {
    cy.validarErro()
})

