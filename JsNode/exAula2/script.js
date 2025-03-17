function msg() {
    let c1 = Number(document.getElementById("campo1").value);
    let c2 = Number(document.getElementById("campo2").value);
    let operation = document.getElementById("operation").value;
  

    switch (operation) {
        case 'add':
            resultado = c1 + c2;
            break;
        case 'sub':
            resultado = c1 - c2;
            break;
        case 'mult':
            resultado = c1 * c2;
            break;
        case 'div':
            resultado = c1 / c2 
            break;
        default:
            resultado = 'Invalid operation';
    }

    document.getElementById('resultado').value = resultado;
} 

// // Add event listeners to trigger calculation on input change
// document.getElementById('campo1').addEventListener('input', msg);
// document.getElementById('campo2').addEventListener('input', msg);
// document.getElementById('operation').addEventListener('change', msg);

// document.querySelector('#btnEnviar').addEventListener('click', function(){
//     const valor1 = parseFloat(document.getElementById('campo1').value) || 0;
//     const valor2 = parseFloat(document.getElementById('campo2').value) || 0;
//     const operacao = document.getElementById('operacao').value;
//     let resultado = 0;

//     switch(operacao){
//         case 'soma':
//             resultado = valor1 + valor2;
//             break;
//         case 'subtracao':
//             resultado = valor1 - valor2;
//             break;
//         case 'multiplicacao':
//             resultado = valor1 * valor2;
//             break;
//         case 'divisao':
//             resultado = valor2 !== 0 ? valor1 / valor2 : 'Erro: divisão por zero!';
//             break;
//     }

//     document.getElementById('campo3').value = resultado;
// });