const readline = require("readline-sync")
let opcao
let op_estoque
let opVendas






function telaPrincipal(){
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
    opcao = readline.questionInt("Escolha uma opção: ")
    switch (opcao){
     case 1: 
         telaVendas()
     break;
     case 2:
         estoque()
     break;
     case 0: 
         console.log("Saindo do sistema...");
     break;
     default: 
         console.log("Opção Inválida")
         readline.question("Aperte ENTER para continuar...")
        
    }
}

function telaVendas(){ 
 console.clear()
 for(opVendas = 4; opVendas > 0;){
    console.log("------------------------------------------");
    console.log("|                 VENDAS                 |");
    console.log("|----------------------------------------|");
    console.log("|\t\t\t\t\t |");
    console.log("|\t    (1) Vendas Pendentes  \t |");
    console.log("|\t    (2) Vendas Realizadas   \t |");
    console.log("|\t    (3) Vendas Canceladas  \t |");
    console.log("|\t    (0) Voltar  \t\t |");
    console.log("|\t\t\t\t\t |");
    console.log("|________________________________________|");
    opVendas = readline.questionInt("Escolha uma Opção: ")
    switch(opVendas){
        case 1: 
         telaVenPendente()
        break;
        case 2: 
         telaVenRealizadas()
        break;
        case 3: 
         telaVenCanceladas()
        break;
        case 0:
         console.log("");
        break;
        default: 
         console.log("Opção inválida");
         readline.question("Aperte ENTER para continuar...")
    

    }console.clear()
}
}

function telaVenPendente(){
 console.clear()
 for(let opVenPendente = 1; opVenPendente > 0;){
    console.clear()
    console.log("------------------------------------------");
    console.log("|            VENDAS PENDENTES            |");
    console.log("|----------------------------------------|");
    console.log("|\t Opção | ID Venda | Valor \t |");
    console.log("|\t\t\t\t\t |");
    console.log("|\t  (1)\t   #01 \t    R$ 350,00    |");
    console.log("|\t\t\t\t\t |");
    console.log("|\t  (0) Para Voltar \t\t |");
    console.log("|________________________________________|");
    opVenPendente = readline.question("Escolha uma opção: ")
    switch(opVenPendente){
        case "1":
            telaVenPendente2()
        break;
        case "0":
            console.log("");
        break;
        default:
            console.log("Opção inválida.");
            readline.question("Aperte ENTER para continuar...")
    }
    console.clear()
    
}}

function telaVenPendente2(){
    console.clear()
    for(let opVenPendete2 = 4; opVenPendete2 > 2;){
    console.log("------------------------------------------");
    console.log("|            VENDAS PENDENTES            |");
    console.log("|----------------------------------------|");
    console.log("|           ID Venda  |  Valor           |");
    console.log("|              #01    |    R$ 350,00     |");
    console.log("|\t\t\t\t\t |");
    console.log("|\t (1) Para confirmar a venda\t |");
    console.log("|\t (2) Para cancelar a venda\t |");
    console.log("|\t (0) Para voltar \t\t |");
    console.log("|\t\t\t\t\t |");
    console.log("|________________________________________|");
    opVenPendete2 = readline.questionInt("Escolha uma opção: ")
    switch(opVenPendete2){
        case 1:
            readline.question("Venda confirmada! Pressione ENTER para continuar...")
        break;
        case 2:
            readline.question("Venda Cancelada! Pressione ENTER para continuar...")
        break;
        case 0:
            console.log("");
        break;
        default:
            readline.question("Opção inválida. Precione Enter para continuar...")
        break;
            
         
    } console.clear()

}}

function telaVenRealizadas(){
    console.clear()
    for(let opVenRealizadas = 1; opVenRealizadas > 0;){
    console.log("------------------------------------------");
    console.log("|            VENDAS REALIZADAS           |");
    console.log("|----------------------------------------|");
    console.log("|\t Opção | ID Venda | Valor \t |");
    console.log("|\t\t\t\t\t |");
    console.log("|\t  (1)\t   #01 \t     350,00      |");
    console.log("|\t\t\t\t\t |");
    console.log("|\t  (0) Para Voltar \t\t |");
    console.log("|________________________________________|");
    opVenRealizadas = readline.questionInt("Escolha uma opção: ")
    switch(opVenRealizadas){
        case 1:
            telaVenRealizadas2()
        break
        case 0:
            console.log("");
        break
        default:
            readline.question("Opção inválida! Pressione ENTER para continuar")
        break
    }
    console.clear()
}}

function telaVenRealizadas2(){
    console.clear()
    for(let opVenRealizadas2 = 1; opVenRealizadas2 > 0;){
        console.log("------------------------------------------");
        console.log("|            VENDAS REALIZADAS           |");
        console.log("|----------------------------------------|");
        console.log("|    Cliente  |   Valor   |  ID Venda    |");
        console.log("|\t\t\t\t\t |");
        console.log("|     Ana        350,00         #1       |");
        console.log("|\t\t\t\t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("|    (0) Para Voltar \t\t\t |");
        console.log("|________________________________________|"); 
        opVenRealizadas2 = readline.questionInt("Escolha uma opção: ")
        switch(opVenRealizadas2){
            case 0:
                console.log("");
            break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continuar");
            break

        }
        console.clear()
    }
}








function telaVenCanceladas(){
    console.clear()
    for(let opVenCanceladas = 1; opVenCanceladas > 0;){
        console.log("------------------------------------------");
        console.log("|            VENDAS CANCELADAS           |");
        console.log("|----------------------------------------|");
        console.log("|\t Opção | ID Venda | Valor \t |");
        console.log("|\t\t\t\t\t |");
        console.log("|\t  (1)\t   #02 \t    531,35 \t |");
        console.log("|\t\t\t\t\t |");
        console.log("|\t  (0) Para Voltar \t\t |");
        console.log("|________________________________________|")
        opVenCanceladas = readline.questionInt("Escolha uma opção: ")
        switch(opVenCanceladas){
            case 1:
                telaVenCanceladas2()
            break;
            case 0:
                console.log("");
            break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continuar")
            break

        } console.clear()
         
    }
}

function telaVenCanceladas2(){
    console.clear()
    for(let opVenCanceladas2 = 3; opVenCanceladas2 > 0;){
        console.log("------------------------------------------");
        console.log("|            VENDAS CANCELADAS           |");
        console.log("|----------------------------------------|");
        console.log("|    Cliente  |   Valor   |  ID Venda    |");
        console.log("|\t\t\t\t\t |");
        console.log("|     Ítalo       531,35       #2        |");
        console.log("|\t\t\t\t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("|    (0) Para Voltar \t\t\t |");
        console.log("|________________________________________|")
        opVenCanceladas2 = readline.questionInt("Escolha uma opção: ")
        switch(opVenCanceladas2){
            case 0:
                console.log("");
            break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continua")
            break
        } console.clear()
    }

}





function estoque(){
    console.clear()
    for(let opEstoque = 1; opEstoque > 0;){
    console.log("------------------------------------------");
    console.log("|                 ESTOQUE                |");
    console.log("|----------------------------------------|");
    console.log("|\t\t\t\t\t |");
    console.log("|\t    (1) Exibir Produtos  \t |");
    console.log("|\t    (2) Editar Produtos   \t |");
    console.log("|\t    (3) Criar Produtos  \t |");
    console.log("|\t    (4) Exluir Produtos \t |");
    console.log("|\t    (0) Voltar \t\t\t |");
    console.log("|\t\t\t\t\t |");
    console.log("|________________________________________|"); 
    opEstoque = readline.questionInt("Escolha uma opção: ")
    switch(opEstoque){
        case 1:
            exibirProdutos()
        break;
        case 2:
            editarProtudos()
        break;
        case 3:
            criarProduto()
        break;
        case 4:
            excluirProduto()
        break;
        case 0:
            console.log("");
        break;
        default:
            readline.question("Opção inválida! Pressione ENTER para continuar")
        break;

    } console.clear()

}}



function excluirProduto(){
    for( let opExcluirProduto = 1; opExcluirProduto > 0;){
        console.clear()
        console.log("------------------------------------------");
        console.log("|             EXCLUIR PRODUTO            |");
        console.log("|----------------------------------------|");
        console.log("|\t\t\t\t\t |");
        console.log("| (1) Ração seca cães 5kg \t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("| (0) Voltar \t\t\t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("|________________________________________|"); 
        opExcluirProduto = readline.questionInt("Escolha uma opção: ")
        switch(opExcluirProduto){
            case 1:
                readline.question("Produto (Ração seca cães 5kg) Excluido com sucesso! Pressione ENTER para continuar")
            break;
            case 0:
                console.log()
            break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continuar")
            break;

        }
    }
}















function criarProduto(){
    console.clear()
    console.log("Criando Produto");
    console.log("");
    readline.question("Informe o nome do produto: ")
    readline.questionFloat("Informe o preço do produto: ")
    readline.questionInt("Informe a quantidade de produto disponível em estoque: ")
    readline.question("Produto criado com sucesso! Pressione ENTER para continuar")
    console.clear()
}








function editarProtudos(){
    console.clear()
    for(let opEditarProdutos = 1; opEditarProdutos > 0;){
         console.log("------------------------------------------");
         console.log("|             EDITAR PRODUTOS            |");
         console.log("|----------------------------------------|");
         console.log("|\t\t\t\t\t |");
         console.log("| (1) Ração seca cães 5kg \t\t |");
         console.log("|\t\t\t\t\t |");
         console.log("| (0) Voltar \t\t\t\t |");
         console.log("|\t\t\t\t\t |");
         console.log("|________________________________________|");
         opEditarProdutos = readline.questionInt("Escolha uma opção: ")
         switch(opEditarProdutos){
            case 1:
                produto1()
            break;
            case 0:
                console.log("");
            break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continuar")
            break;
        } console.clear()
    }
}

function produto1(){
    console.clear()
    for(let edProtudo1 = 1; edProtudo1 > 0;){
        console.log("------------------------------------------");
        console.log("|             EDITAR PRODUTOS            |");
        console.log("|----------------------------------------|");
        console.log("|\t\t\t\t\t |");
        console.log("| (1) Ração seca cães 5kg \t\t |");
        console.log("| (2) Quantidade em estoque: 15 \t |");
        console.log("| (3) Preço: R$50,00 \t\t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("| (0) Voltar \t\t\t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("|________________________________________|");
        edProtudo1 = readline.questionInt("Escolha uma opção: ")
        switch(edProtudo1){
            case 1:
                readline.question("Informe o novo nome do protudo: ")
                readline.question("Nome alterado com sucesso! Pressione ENTER para continuar")
            break;
            case 2:
                readline.questionInt("Informe a quantidade disponível em estoque: ")
                readline.question("Estoque alterado com sucesso! Pressione ENTER para continuar")
            break;
            case 3:
                readline.questionFloat("Informe o novo preço do produto: ")
                readline.question("Preço alterado com sucesso! Pressione ENTER para continuar")
            break;
            case 0:
                console.log("");
            break;
            default:
                readline.question("Opção inválida! Precione ENTER para continuar")
            break
        } console.clear()
    }
}








function exibirProdutos(){
    console.clear()
    for(let opExibirProdutos = 1; opExibirProdutos > 0;){
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
        console.log("|\t\t\t\t\t |");
        console.log("|________________________________________|")
        opExibirProdutos = readline.questionInt("Escolha uma opção: ")
        switch(opExibirProdutos){
            case 0:
                console.log("");
            break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continuar")
            break
        } console.clear()

    }
}








do{
    telaPrincipal()
    
}while(opcao !== 0)