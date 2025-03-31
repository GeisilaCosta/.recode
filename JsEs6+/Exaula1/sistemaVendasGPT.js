const readline = require('readline-sync');

// Estruturas de dados
let produtos = [];
let clientes = [];
let vendas = [];
let idProduto = 1;
let idCliente = 1;
let idVenda = 1;

// Funções CRUD para produtos
function addProduto(nome, preco, estoque) {
    produtos.push({ id: idProduto++, nome, preco, estoque });
    console.log("Produto adicionado com sucesso!");
}

function listarProdutos() {
    console.log("Lista de Produtos:");
    produtos.forEach(produto => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}, Estoque: ${produto.estoque}`);
    });
}

function removerProduto(id) {
    produtos = produtos.filter(p => p.id !== id);
    console.log("Produto removido.");
}

function alterarProduto(id, novosDados) {
    let produto = produtos.find(p => p.id === id);
    if (produto) Object.assign(produto, novosDados);
    else console.log("Produto não encontrado.");
}

// Funções CRUD para clientes
function addCliente(nome, telefone) {
    clientes.push({ id: idCliente++, nome, telefone });
    console.log("Cliente cadastrado!");
}

function listarClientes() {
    console.log("Lista de Clientes:", clientes);
}

// Função para realizar venda
function realizarVenda(idCliente, itens) {
    let cliente = clientes.find(c => c.id === idCliente);
    if (!cliente) return console.log("Cliente não encontrado.");

    let total = 0;
    let vendaProdutos = [];
    for (let item of itens) {
        let produto = produtos.find(p => p.id === item.id);
        if (!produto || produto.estoque < item.quantidade) {
            console.log(`Produto ${item.id} indisponível.`);
            return;
        }
        produto.estoque -= item.quantidade;
        total += produto.preco * item.quantidade;
        vendaProdutos.push({ id: produto.id, quantidade: item.quantidade });
    }
    vendas.push({ id: idVenda++, cliente: cliente.id, produtos: vendaProdutos, total });
    console.log("Venda realizada com sucesso!");
}

// Relatórios
function totalVendas() {
    console.log(`Total de vendas: ${vendas.length}`);
}

function historicoCliente(idCliente) {
    let historico = vendas.filter(v => v.cliente === idCliente);
    console.log("Histórico de Compras:", historico);
}

function estoqueAtual() {
    console.log("Estoque Atual:", produtos);
}

// Menu interativo
function menu() {
    while (true) {
        console.log("\n1 - Adicionar Produto");
        console.log("2 - Listar Produtos");
        console.log("3 - Remover Produto");
        console.log("4 - Adicionar Cliente");
        console.log("5 - Listar Clientes");
        console.log("6 - Realizar Venda");
        console.log("7 - Total de Vendas");
        console.log("8 - Histórico de Compras por Cliente");
        console.log("9 - Estoque Atual");
        console.log("10 - Sair");
        
        let opcao = readline.question("Escolha uma opção: ");
        
        if (opcao === "1") {
            let nome = readline.question("Nome do Produto: ");
            let preco = parseFloat(readline.question("Preço: "));
            let estoque = parseInt(readline.question("Estoque: "));
            addProduto(nome, preco, estoque);
        } else if (opcao === "2") listarProdutos();
        else if (opcao === "3") {
            let id = parseInt(readline.question("ID do Produto: "));
            removerProduto(id);
        } else if (opcao === "4") {
            let nome = readline.question("Nome do Cliente: ");
            let telefone = readline.question("Telefone: ");
            addCliente(nome, telefone);
        } else if (opcao === "5") listarClientes();
        else if (opcao === "6") {
            let idCliente = parseInt(readline.question("ID do Cliente: "));
            let itens = [];
            while (true) {
                let idProduto = parseInt(readline.question("ID do Produto (ou 0 para finalizar): "));
                if (idProduto === 0) break;
                let quantidade = parseInt(readline.question("Quantidade: "));
                itens.push({ id: idProduto, quantidade });
            }
            realizarVenda(idCliente, itens);
        } else if (opcao === "7") totalVendas();
        else if (opcao === "8") {
            let id = parseInt(readline.question("ID do Cliente: "));
            historicoCliente(id);
        } else if (opcao === "9") estoqueAtual();
        else if (opcao === "10") {
            console.log("Saindo...");
            break;
        } else console.log("Opção inválida!");
    }
}

menu();
