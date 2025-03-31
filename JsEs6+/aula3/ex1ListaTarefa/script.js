// function adicionarItem() {
//   let lista = document.getElementById("lista");
//   let novoItem = document.createElement("li");
 
//   novoItem.textContent = "Novo item da lista";
//   lista.appendChild(novoItem);
// }
 
 
// function removeItem() {
//     let lista = document.getElementById("lista");
//     lista.removeChild(lista.lastChild)
 
//   }


function adicionarItem() {
    let inputField = document.querySelector('input[type="text"]');
    let itemValue = inputField.value; // Get the value from the input field
    let lista = document.getElementById("lista");
    let novoItem = document.createElement("li");
   
    novoItem.textContent = itemValue; // Set the text content to the input value
    lista.appendChild(novoItem);
    inputField.value = ""; // Clear the input field
}

   
   
  function removeItem() {
      let lista = document.getElementById("lista");
      lista.removeChild(lista.lastChild)
   
    }
 