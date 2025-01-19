# utf-8
# language: pt 

Funcionalidade: preencher formulário de Automobile Insurance - No site da Tricents
    Cenário: preencher todos as abas de formulários para Automobile Insurance e enviar com sucesso
        Dado que o usuario esta na pagina inicial da Tricents 
        Quando o usuario aperta na opçao Automobile Insurance
        E preenche todos os campos de info da aba Enter Vehicle Data e aperta next
        E preenche todos os campos de info da aba Enter Insurant Data e aperta next
        E preenche todos os campos de info da aba Enter Product Data e aperta next
        E preenche todos os campos de info da aba select Price Option e aperta next
        E preenche todos os campos de info da aba Send Quote e aperta send   
        Então o usuario visualiza na tela uma mensagem de sucesso no envio 
        E clica no botao OK para fechar a mensagem     