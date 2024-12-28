// // declaração de variaveis 
// // x:inteiro, nome:caracter, status:logico 
// // entradas de dados

// let v1 = Number(prompt('Digite o primeiro valor: ')) 
// let v2 = Number(prompt('Digite o segundo valor: ')) 

// // Processo 

// let soma = v1 + v2 

// // Saida de dados 

// alert("Soma dos valores = " + soma) // escreva()
// document.write(`Soma dos valores = ${soma}`)// escreva()

//   //Exercicio 1
//   //Em epocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconte. Faça um script que possa entrar com o valor de um produto e imprema o novo valor, tendo em vista que o desconto e de 9% do valor do produto. 

// let valorProduto = Number(prompt('Digite o valor do produto: '))
// let desconto = 0.09
// let valorDesconto = valorProduto * desconto
// let valorFinal = valorProduto - valorDesconto
// alert(`O valor do produto com desconto de 9% e de: ${valorFinal}`)

// //Exercicio 2
// //Uma empresa de vendas de software paga ao seu funcionario um salário fixo de 1200,00 por mes,  e uma comissão de 15% pelo seu valor de vendas no mes. Faca um algoritimo que leia o valor das vendas e determine o salário total do funcionario. Mostre as informacoes que voce achar necessario.

// let salarioFixo = 1200
// let comissao = 0.15
// let valorVendas = Number(prompt('Digite o valor das vendas: '))
// let salarioTotal = salarioFixo + (comissao * valorVendas)
// alert(`O salario total do funcionario e de: ${salarioTotal}, tendo um salario fixo de ${salarioFixo} e uma comissao de ${comissao}`)

//Exercicio 3
//faca um script que mostre o novo preco de um produto sabendo-se que este tera um desconto de 15%, mostrando tambem a classificacao do produto segundo as informacoes abaixo:
//novo preco: de 500 para cima = caro
//abaixo de 500 = barato

// let precoProduto = Number(prompt('Digite o preco do produto: '))
// let desconto = 0.15
// let precoFinal = precoProduto - (precoProduto * desconto)
// if (precoFinal > 500) {
//     alert(`O produto é caro, R$ ${precoFinal}`)
// } else {
//     alert(`O produto é barato R$ ${precoFinal}`)
// }

//Exercicio 4
//E = &&

//Exercicio 5
//criar uma funcao que receba como parametro um valor em real e um tipo de moeda sendo d para dolar e e para euro. A funcao vai converter o valor em real para a moeda selecionada dolar=5,50 e euro=7,00.

// function converterMoeda(real, moeda) {
//     if (moeda == 'd') {
//         alert(`O valor em dolar e de: ${real / 5.50}`)
//     } else if (moeda == 'e') {
//         alert(`O valor em euro e de: ${real / 7.00}`)
//     } else {
//         alert('Moeda invalida')
//     }

// }

// alert(converterMoeda(1000, 'd'))
//88888888888888888888888888888888888888888888888888-OUTRA FORMA DE FAZER O EXERCICIO 5-88888888888888888888888888888888888888
// let real = Number(prompt('Digite o valor em real: '))
// let tipoMoeda = prompt('Digite o tipo de moeda: ')
// let valorMoeda = 0
// if (tipoMoeda == 'd') {
//     valorMoeda = 5.50
// } else if (tipoMoeda == 'e') {
//     valorMoeda = 7.00
// }
// let valorConvertido = real / valorMoeda
// alert(`O valor convertido para ${tipoMoeda} e de: ${valorConvertido}`)