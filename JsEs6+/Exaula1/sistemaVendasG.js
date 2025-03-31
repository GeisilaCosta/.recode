const readline = require('readline-sync');

// Estruturas de dados
let produtos = [];
let clientes = [];
let vendas = [];


// Funções
function cadastrarProduto() {
    const id = produtos.length + 1;
    const nome = readline.question('Nome do produto: ');
    const preco = parseFloat(readline.question('Preco do produto: '));
    const categoria = readline.question('Categoria do produto: ');
    produtos.push({ id, nome, preco, categoria });
    console.log('Produto cadastrado com sucesso!');
}

function cadastrarCliente() {
    const id = clientes.length + 1;
    const nome = readline.question('Nome do cliente: ');
    const telefone = readline.question('Telefone do cliente: ');
    clientes.push({ id, nome, telefone });
    console.log('Cliente cadastrado com sucesso!');
}

function cadastrarVenda() {
    const id = vendas.length + 1;
    const idCliente = readline.question('ID do cliente: ');
    const itens = [];
    while (true) {
        const idProduto = readline.question('ID do produto: ');
        const quantidade = readline.question('Quantidade: ');
        itens.push({ id: idProduto, quantidade });
        const continuar = readline.question('Deseja adicionar mais produtos? (S/N): ');
        if (continuar.toLowerCase() !== 's') break;
    }
    vendas.push({ id, idCliente, itens });
    console.log('Venda cadastrada com sucesso!');
}

function listarProdutos() {
    console.log("Lista de Produtos:");
    produtos.forEach(produto => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`);
    });

}

function listarClientes() { 
    console.log('Lista de clientes:');
    console.log(clientes);
}

function listarVendas() {
    console.log('Lista de vendas:');
    console.log(vendas);
}

function main() {
    while (true) {
        console.log('1 - Cadastrar produto');
        console.log('2 - Cadastrar cliente');
        console.log('3 - Cadastrar venda');
        console.log('4 - Listar produtos');
        console.log('5 - Listar clientes');
        console.log('6 - Listar vendas');
        console.log('7 - Sair');
        const opcao = readline.question('Escolha uma opcao: ');
        switch (opcao) {
            case '1':
                cadastrarProduto();
                break;
            case '2':            
                cadastrarCliente();
                break;
            case '3':
                cadastrarVenda();
                break;
            case '4':
                listarProdutos();
                break;
            case '5':
                listarClientes();
                break;
            case '6':
                listarVendas();
                break;
            case '7':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

main();
