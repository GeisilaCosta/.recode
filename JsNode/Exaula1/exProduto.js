const produto = {
    // Lista de produtos armazenada no objeto
    lista: [],
  
    // Create - Adicionar um produto à lista
    adicionar(nome, preco, categoria) {
      const id = this.lista.length + 1; // Gera um ID único baseado no tamanho da lista
      this.lista.push({ id, nome, preco, categoria }); // Adiciona o novo produto ao array
      console.log("Produto adicionado:", { id, nome, preco, categoria });
    },
  
    // Read - Exibir todos os produtos cadastrados
    listar() {
      console.log("Lista de Produtos:", this.lista);
    },
  
    // Update - Atualizar informações de um produto pelo ID
    atualizar(id, novosDados) {
      const item = this.lista.find((p) => p.id === id); // Procura o produto pelo ID
      if (item) {
        Object.assign(item, novosDados); // Atualiza os dados do produto encontrado
        console.log("Produto atualizado:", item);
      } else {
        console.log("Produto não encontrado.");
      }
    },
  
    // Delete - Remover um produto pelo ID
    remover(id) {
      const index = this.lista.findIndex((p) => p.id === id); // Encontra o índice do produto
      if (index !== -1) {
        this.lista.splice(index, 1); // Remove o produto da lista
        console.log(`Produto com ID ${id} removido.`);
      } else {
        console.log("Produto não encontrado.");
      }
    }
  };
  
  // Exemplo de uso do CRUD
  produto.adicionar("Celular", 1500, "Eletrônicos"); // Adiciona um produto
  produto.adicionar("Notebook", 3500, "Informática"); // Adiciona outro produto
  
  produto.listar(); // Lista todos os produtos
  
  produto.atualizar(1, { preco: 1400, nome: "Smartphone" }); // Atualiza o produto com ID 1
  
  produto.listar(); // Lista novamente os produtos após atualização
  
  produto.remover(2); // Remove o produto com ID 2
  
  produto.listar(); // Lista os produtos após remoção
  