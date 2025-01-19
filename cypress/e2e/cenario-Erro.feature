# utf-8
# language: pt 

Funcionalidade: preencher dados da pagina formulário 1 
Cenário: usuário preenche de forma errada um dos campos do formulário 1 
Dado que o usuário está na pagina de formulário 1
Quando preenche todos os campos de forma correta exceto o campo list price e aperto enviar 
Então aparece uma mensagem de erro e ele nao pode continuar o formulario

