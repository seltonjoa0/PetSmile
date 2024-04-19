var readline = require("readline-sync")

var opcao 

do{
console.clear()
console.log("------------------------------------------");
console.log("|            SISTEMA PETSMILE            |");
console.log("|----------------------------------------|");
console.log("|\t\t\t\t\t |");
console.log("|\t    (1) Vendas   \t\t |");
console.log("|\t    (2) Estoque   \t\t |");
console.log("|\t    (0) Sair do sistema   \t |");
console.log("|\t\t\t\t\t |");
console.log("|________________________________________|");
opcao = readline.questionInt("Digite uma opção: ")

switch(opcao){
    case 1:
        for(var opcaoVendas = 1; opcaoVendas != 0;){
            console.clear()
            console.log("------------------------------------------");
            console.log("|                 VENDAS                 |");
            console.log("|----------------------------------------|");
            console.log("|\t\t\t\t\t |");
            console.log("|\t    (1) Vendas Pendentes  \t |");
            console.log("|\t    (2) Vendas Realizadas   \t |");
            console.log("|\t    (3) Vendas Canceladas  \t |");
            console.log("|\t\t\t\t\t |");
            console.log("|\t    (0) Voltar  \t\t |");
            console.log("|\t\t\t\t\t |");
            console.log("|________________________________________|");
            opcaoVendas = readline.questionInt("Digite uma opção: ")
            switch(opcaoVendas){
                case 1:
                    for(opcaoVenPendentes = 1; opcaoVenPendentes != 0;){
                        console.clear()
                        console.log("------------------------------------------");
                        console.log("|            VENDAS PENDENTES            |");
                        console.log("|----------------------------------------|");
                        console.log("|\t Opção | ID Venda | Valor \t |");
                        console.log("|\t\t\t\t\t |");
                        console.log("|\t  (1)\t   #07 \t    R$ 350,00    |");
                        console.log("|\t  (2)\t   #08 \t    R$ 115,00    |");
                        console.log("|\t  (3)\t   #09 \t    R$ 20,00     |");
                        console.log("|\t\t\t\t\t |");
                        console.log("|\t  (0) Voltar \t\t\t |");
                        console.log("|________________________________________|");
                        opcaoVenPendentes = readline.questionInt("Digite uma opção: ")
                        switch(opcaoVenPendentes){
                            case 1: var confirmarVendaPendente 
                                
                                    console.clear()
                                    console.log("------------------------------------------");
                                    console.log("|            VENDAS PENDENTES            |");
                                    console.log("|----------------------------------------|");
                                    console.log("|             ID Venda | Valor           |");
                                    console.log("|                #07     R$350,00        |");
                                    console.log("|\t\t\t\t\t |")
                                    console.log("|\t (1) Para confirmar a venda\t |");
                                    console.log("|\t (2) Para cancelar a venda\t |");
                                    console.log("|\t\t\t\t\t |");
                                    console.log("|\t (0) Voltar \t\t\t |");
                                    console.log("|\t\t\t\t\t |");
                                    console.log("|________________________________________|");
                                    confirmarVendaPendente = readline.questionInt("Digite uma opção: ")
                                    switch(confirmarVendaPendente){
                                        case 1:
                                            readline.question("Para continuar aperte ENTER")
                                            break
                                        case 2:
                                            
                                            
                                    


                            }

                        }

                    }
            }
        }
     break
    case 2: for(var estoque = 1; estoque =! 0;){
        console.clear()
        console.log("------------------------------------------");
        console.log("|                 ESTOQUE                |");
        console.log("|----------------------------------------|");
        console.log("|\t\t\t\t\t |");
        console.log("|\t    (1) Exibir Produtos  \t |");
        console.log("|\t    (2) Editar Produtos   \t |");
        console.log("|\t    (3) Criar Produtos  \t |");
        console.log("|\t    (4) Exluir Produtos \t |");
        console.log("|\t\t\t\t\t |");
        console.log("|\t    (0) Voltar \t\t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("|________________________________________|");
        estoque = readline.questionInt("Digite uma opção: ")
        switch(estoque){
            case 1:
                for(var exibirProduto = 1; exibirProduto != 0;){
                    console.clear()
                    console.log("------------------------------------------");
                    console.log("|           PRODUTOS EM ESTOQUE          |");
                    console.log("|----------------------------------------|");
                    console.log("|\t\t\t\t\t |");
                    console.log("| Ração seca cães 5kg R$50,00            |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Ração seca gatos 2kg R$28,00           |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Petisco frango cães 100g R$12,00       |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Comedouro P R$15,00                    |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Comedouro M R$26,00                    |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Comedouro G R$34,00                    |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Vermífugo cães e gatos 25ml R$40,00    |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Antitoxico cães e gatos 30ml R$22,00   |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Shampoo cães filhotes 200ml R$24,00    |");
                    console.log("| (15 Disponível)                        |");
                    console.log("| Shampoo cães adultos 200ml R$21,00     |");
                    console.log("| (15 Disponível)                        |");
                    console.log("|\t\t\t\t\t |");
                    console.log("| (0) Voltar \t\t\t\t |");
                    console.log("|________________________________________|");
                    exibirProduto = readline.questionInt("Digite uma opção")
                    
                    
            }

        }
    }
    }





}while(opcao != 0)