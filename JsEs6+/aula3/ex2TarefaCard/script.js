// Pegando os elementos do DOM
const containerCards = document.getElementById("containerCards");
 
// Função para adicionar um novo card
function adicionarCard() {
  let titulo = document.getElementById("tituloCard").value;
  let descricao = document.getElementById("descricaoCard").value;
 
  if (titulo.trim() === "" || descricao.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }
 
  // Criando o card dinamicamente
  let card = document.createElement("div");
  card.classList.add("col-md-4", "mb-3");
 
  card.innerHTML = `
        <div class="card shadow p-3">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descricao}</p>
            <button class="btn btn-remove" onclick="removerCard(this)">Remover</button>
        </div>
    `;
 
  // Adicionando animação de entrada
  card.style.animation = "fadeIn 0.3s ease-in-out";
 
  // Adicionando o card ao container
  containerCards.appendChild(card);
 
  // Limpando os campos de input
  document.getElementById("tituloCard").value = "";
  document.getElementById("descricaoCard").value = "";
}
 
// Função para remover um card
function removerCard(botao) {
  let card = botao.parentElement.parentElement;
  card.remove();
  // Adicionando animação de saída
  card.classList.add("fadeOut");
}
 