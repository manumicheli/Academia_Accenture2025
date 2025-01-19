Given('que o usuário está na pagina de formulário 1', () => {
    cy.visit('/app.php')
})

When('preenche todos os campos de forma correta exceto o campo list price e aperto enviar',()=>{
    cy.preencherForm1Errado()
})
Then ('aparece uma mensagem de erro e ele nao pode continuar o formulario', () => {
    
})

