import readlineSync from 'readline-sync';

const produto = {
  lista: [],

  adicionar(nome, preco, categoria) {
    this.lista.push({ nome, preco, categoria });
    console.log("Produto adicionado:", { nome, preco, categoria });
  },

  listar() {
    console.log("Lista de Produtos:", this.lista);
  },

  atualizar(indice, novosDados) {
    if (this.lista[indice]) {
      Object.assign(this.lista[indice], novosDados);
      console.log("Produto atualizado:", this.lista[indice]);
    } else {
      console.log("Produto não encontrado.");
    }
  },

  remover(indice) {
    if (this.lista[indice]) {
      this.lista.splice(indice, 1);
      console.log(`Produto no índice ${indice} removido.`);
    } else {
      console.log("Produto não encontrado.");
    }
  }
};

function menu() {
  while (true) {
    console.log("\n1 - Adicionar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Atualizar Produto");
    console.log("4 - Remover Produto");
    console.log("5 - Sair");

    let opcao = readlineSync.question("Escolha uma opção: ");

    if (opcao === "1") {
      let nome = readlineSync.question("Nome do Produto: ");
      let preco = parseFloat(readlineSync.question("Preço do Produto: "));
      let categoria = readlineSync.question("Categoria do Produto: ");
      produto.adicionar(nome, preco, categoria);
    } else if (opcao === "2") {
      produto.listar();
    } else if (opcao === "3") {
      let indice = parseInt(readlineSync.question("Informe o índice do produto a ser atualizado: "));
      let nome = readlineSync.question("Novo Nome (deixe vazio para não alterar): ");
      let preco = readlineSync.question("Novo Preço (deixe vazio para não alterar): ");
      let categoria = readlineSync.question("Nova Categoria (deixe vazio para não alterar): ");
      let novosDados = {};
      if (nome) novosDados.nome = nome;
      if (preco) novosDados.preco = parseFloat(preco);
      if (categoria) novosDados.categoria = categoria;
      produto.atualizar(indice, novosDados);
    } else if (opcao === "4") {
      let indice = parseInt(readlineSync.question("Informe o índice do produto a ser removido: "));
      produto.remover(indice);
    } else if (opcao === "5") {
      console.log("Saindo...");
      break;
    } else {
      console.log("Opção inválida!");
    }
  }
}

menu();

