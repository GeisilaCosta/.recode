function adicionarTarefa() {
    let input = document.getElementById("minhaTarefa");
    let lista = document.getElementById("listaTarefas");

    if (input.value.trim() === "") {
        alert("Por favor, digite uma tarefa.");
    }

    let li = document.createElement("li");
    
}