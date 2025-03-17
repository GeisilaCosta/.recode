let produto = {
    // Lista de produtos armazenada no objeto
    lista: [],
  
    // Adicionar um produto à lista
    adicionar(nome, preco, categoria) {
      this.lista.push({ nome, preco, categoria }); // Adiciona o produto ao array
      console.log("Produto adicionado:", { nome, preco, categoria });
    },
  
    // Exibir todos os produtos cadastrados
    listar() {
      console.log("Lista de Produtos:", this.lista);
    },
  
    // Atualizar um produto pelo índice
    atualizar(indice, novosDados) {
      if (this.lista[indice]) {
        Object.assign(this.lista[indice], novosDados); // Atualiza os dados do produto no índice
        console.log("Produto atualizado:", this.lista[indice]);
      } else {
        console.log("Produto não encontrado.");
      }
    },
  
    // Remover um produto pelo índice
    remover(indice) {
      if (this.lista[indice]) {
        this.lista.splice(indice, 1); // Remove o produto pelo índice
        console.log(`Produto no índice ${indice} removido.`);
      } else {
        console.log("Produto não encontrado.");
      }
    }
  };
  
  // Exemplo de uso do CRUD
  produto.adicionar("Celular", 1500, "Eletrônicos"); // Adiciona um produto
  produto.adicionar("Notebook", 3500, "Informática"); // Adiciona outro produto
  
  produto.listar(); // Lista todos os produtos
  
  produto.atualizar(0, { preco: 1400, nome: "Smartphone" }); // Atualiza o primeiro produto
  
  produto.listar(); // Lista novamente os produtos após atualização
  
  produto.remover(1); // Remove o segundo produto
  
  produto.listar(); // Lista os produtos após remoção