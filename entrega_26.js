const readline = require("readline-sync")
let opcao
let op_estoque
let opVendas
let idContagem = 2

let racaoCachorro = {
    id: 1,
    nome: "Ração seca cachorro 5kg",
    preco: 50.00,
    estoque: 15,
}

let racaoGato = {
    id: 2,
    nome: "Ração seca gato 5kg",
    preco: 30.00,
    estoque: 15,

}


let produtos = [racaoCachorro, racaoGato];

let idCompra = 1


let compras = []










function telaPrincipal() {
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
    switch (opcao) {
        case 1:
            telaVendas()
            break;
        case 2:
            estoque()
            break;
        case 0:
            console.log("Saindo do sistema...");
            break;
        case 3:
            registrarCompra()
            break;
        default:
            console.log("Opção Inválida")
            readline.question("Aperte ENTER para continuar...")

    }
}

function telaVendas() {
    console.clear()
    for (opVendas = 4; opVendas > 0;) {
        console.log("------------------------------------------");
        console.log("|                 VENDAS                 |");
        console.log("|----------------------------------------|");
        console.log("|\t\t\t\t\t |");
        console.log("|\t    (1) Registrar nova venda  \t |");
        console.log("|\t    (2) Vendas realizadas   \t |");
        console.log("|\t    (0) Voltar  \t\t |");
        console.log("|\t\t\t\t\t |");
        console.log("|________________________________________|");
        opVendas = readline.questionInt("Escolha uma Opção: ")
        switch (opVendas) {
            case 1:
                registrarCompra()
                break;
            case 2:
                telaVenRealizadas()
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



function telaVenRealizadas() {
    console.clear()
    for (let opVenRealizadas = 1; opVenRealizadas > 0;) {
        console.log("------------------------------------------");
        console.log("|            VENDAS REALIZADAS           |");
        console.log("|----------------------------------------|");
        console.log(" ID\t Preço\t\t Cliente");
        console.log("");
        for(let i in compras){
            console.log(` ${compras[i].id}\t R$${compras[i].preço.toFixed(2)}\t  ${compras[i].cliente}`);

        }
        console.log("");
        console.log(" (0) Voltar ");
        console.log("|________________________________________|");
        opVenRealizadas = readline.questionInt("Escolha uma opção: ")
        for( let i in compras){
            if(opVenRealizadas == compras[i].id){
                console.clear()
                console.log("------------------------------------------");
                console.log("|            VENDAS REALIZADAS           |");
                console.log("|----------------------------------------|");
                console.log(` ID: ${compras[i].id}`);
                console.log(` Cliente: ${compras[i].cliente}`);
                console.log(` Preço: R$${compras[i].preço.toFixed(2)}`);
                console.log(` Forma de pagamento: ${compras[i].pagamento}`);
                console.log(" Produtos comprados:");
                console.log(` ${compras[i].produtos}`);
                console.log("");
                readline.question(" Pressione ENTER para voltar ")


            }
        }

        
        console.clear()
    }
}





function estoque() {
    console.clear()
    for (let opEstoque = 1; opEstoque > 0;) {
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
        switch (opEstoque) {
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

    }
}



function excluirProduto() {
    let prodApagar = 1;
    while (prodApagar > 0) {
        console.clear()
        console.log("------------------------------------------");
        console.log("|             EXCLUIR PRODUTO            |");
        console.log("|----------------------------------------|");
        console.log("");
        console.log(" ID\tPRODUTO")
        console.log("");
        for (let i = 0; i < produtos.length; i++) {
            console.log(` #${produtos[i].id}\t${produtos[i].nome}`);
        }
        console.log("");
        console.log(" (0) Voltar ");
        console.log("");
        console.log("|________________________________________|");
        // opExcluirProduto = readline.questionInt("Escolha uma opção: ")
        // produtos.splice(opExcluirProduto, 1);

         prodApagar = readline.questionInt("ID do produto que deseja apagar: ")
        
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id == prodApagar) {
                produtos.splice(i, 1);
            }
        }



    }
}















function criarProduto() {
    console.clear()
    console.log("Criando Produto");
    console.log("");
    let nomeProduto = readline.question("Informe o nome do produto: ")
    let precoProduto = readline.questionFloat("Informe o preço do produto: ")
    let estoqueProduto = readline.questionInt("Informe a quantidade de produto disponível em estoque: ")
    idContagem++;
    let produto = {
        id: idContagem,
        nome: nomeProduto,
        preco: precoProduto,
        estoque: estoqueProduto,
    }
    produtos.push(produto)
    readline.question("Produto criado com sucesso! Pressione ENTER para continuar")

}








function editarProtudos() {
    console.clear()
    for (let opEditarProdutos = 1; opEditarProdutos > 0;) {
        console.log("------------------------------------------");
        console.log("|             EDITAR PRODUTOS            |");
        console.log("|----------------------------------------|");
        console.log("");
        console.log(" ID\tPRODUTO")
        console.log("");
        for (let i = 0; i < produtos.length; i++) {
            console.log(` #${produtos[i].id}\t${produtos[i].nome}`);
        }
        console.log("");
        console.log(" (0) Voltar ");
        console.log("");
        console.log("_________________________________________");
        opEditarProdutos = readline.questionInt("Entre com o ID do produto que deseja modificar: ")
        

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id == opEditarProdutos) {
                console.clear();
                console.log("------------------------------------------");
                console.log("|             EDITAR PRODUTOS            |");
                console.log("|----------------------------------------|");
                console.log("");
                console.log(`\tId: ${produtos[i].id}\n\tProduto: ${produtos[i].nome}\n\tPreço: ${produtos[i].preco}\n\tEstoque: ${produtos[i].estoque}\n`);
                console.log("_________________________________________");

                console.log("Caso nao queira modificar o campo tecle enter!");
                let nomeA = readline.question("Nome: ");
                if (nomeA != "") {
                    produtos[i].nome = nomeA;
                }
                let precoA = readline.question("Preço: ");
                if (precoA != "") {
                    produtos[i].preco = parseInt(precoA);
                }
                let estoqueA = readline.question("Estoque: ");
                if (estoqueA != "") {
                    produtos[i].estoque = parseInt(estoqueA);
                }
            }
        }

    } console.clear()
}



function exibirProdutos() {
    console.clear()
    for (let opExibirProdutos = 1; opExibirProdutos > 0;) {
        console.log("------------------------------------------");
        console.log("|           PRODUTOS EM ESTOQUE          |");
        console.log("|----------------------------------------|");
        console.log("");
        for (let incremento = 0; incremento < produtos.length; incremento++) {
            console.log(` ${produtos[incremento].nome}`)
        }
        console.log("");
        console.log(" (0) Voltar ");
        console.log("");
        console.log("_________________________________________")
        opExibirProdutos = readline.questionInt("Escolha uma opção: ")
        switch (opExibirProdutos) {
            case 0:
                console.log("");
                break;
            default:
                readline.question("Opção inválida! Pressione ENTER para continuar")
                break
        } console.clear()

    }
}

function registrarCompra() {
    console.clear();
    console.log("------------------------------------------");
    console.log("|             REGISTRAR COMPRA           |");
    console.log("|----------------------------------------|");
    console.log("");
    console.log("Produtos disponíveis para compra:");
    console.log("");

    for (let i = 0; i < produtos.length; i++) {
        console.log(`#${produtos[i].id}: ${produtos[i].nome} - R$ ${produtos[i].preco.toFixed(2)} - Estoque: ${produtos[i].estoque}`);
    }
    console.log("");

    let produtosComprados = [];
    let continuarComprando = true;

    while (continuarComprando) {
        let idProduto = readline.question("Digite o ID do produto que deseja comprar (ou 'C' para cancelar a compra): ");
        
        if (idProduto.toUpperCase() === 'C') {
            console.log("Compra cancelada. Nenhum produto será registrado.");
            return;
        }

        idProduto = Number(idProduto);

        if (isNaN(idProduto)) {
            console.log("ID de produto inválido. Por favor, insira um número válido.");
            continue;
        }

        let quantidade = readline.questionInt("Digite a quantidade desejada: ");
        let produtoSelecionado = produtos.find(produto => produto.id === idProduto);

        if (produtoSelecionado && produtoSelecionado.estoque >= quantidade) {
            produtosComprados.push({ produto: produtoSelecionado, quantidade: quantidade });
            produtoSelecionado.estoque -= quantidade;
            console.log(`${produtoSelecionado.nome} adicionado ao carrinho. Quantidade: ${quantidade}`);
        } else {
            console.log("Produto selecionado ou quantidade indisponível. Por favor, tente novamente.");
            continue;
        }

        let resposta = readline.question("Deseja continuar comprando? (S para continuar, N para finalizar): ");
        if (resposta.toUpperCase() === 'N') {
            if (produtosComprados.length === 0) {
                console.log("Nenhum produto foi selecionado. Compra cancelada.");
                return;
            } else {
                continuarComprando = false;
            }
        }
    }

    let nomeCliente = readline.question("Digite o nome do cliente: ");
    console.clear()
    let formaPagamento
    let rep = true
    while(rep == true){
        console.log("1- Pix");
    console.log("2- Debito");
    console.log("3- Crédito");
    console.log("4- Dinheiro");
    formaPagamento = readline.questionInt("Escolha uma opção: ")
    switch(formaPagamento){
        case 1:
            formaPagamento = "Pix"
            rep = false
        break
        case 2:
            formaPagamento = "Débito"
            rep = false
        break
        case 3:
            formaPagamento = "Crédito"
            rep = false
        break
        case 4:
            formaPagamento = "Dinheiro"
            rep = false
        break
        default:
            readline.question("Opção inválida! Pressione ENTER para tentar novamente.")
            console.clear()
        break
    }

    } 
    
    console.clear()

    console.log("");
    console.log("Compra registrada com sucesso!");
    console.log(`Cliente: ${nomeCliente}`);
    console.log(`Forma de pagamento: ${formaPagamento}`);
    console.log("Produtos comprados:");

    let nomeProduto = [];
    let preco = 0;
    for (let i = 0; i < produtosComprados.length; i++) {
        let precoAA = produtosComprados[i].produto.preco * produtosComprados[i].quantidade;
        preco += precoAA;
        nomeProduto.push(produtosComprados[i].produto.nome);
        console.log(`${produtosComprados[i].produto.nome} - Quantidade: ${produtosComprados[i].quantidade}`);
    }

    compras.push({ cliente: nomeCliente, pagamento: formaPagamento, produtos: nomeProduto, preço: preco, id: idCompra });
    idCompra++;
    console.log("");
    readline.question("Pressione ENTER para continuar...");
}
















do {
    telaPrincipal()

} while (opcao !== 0)

















