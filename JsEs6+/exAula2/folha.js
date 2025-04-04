// document.addEventListener('DOMContentLoaded', function() {
//     const totalVencimentosInput = document.getElementById('totalVencimentos');
//     const totalDescontosInput = document.getElementById('totalDescontos');
//     const valorLiquidoInput = document.getElementById('valorLiquido');

//     function calcularTotais() {
//         const salarioBasePercentage = 1; // 100% of Vencimentos
//         const inssPercentage = 0.11; // 11% of Vencimentos
//         const fgtsPercentage = 0.08; // 8% of Vencimentos
//         const irrfPercentage = 0.15; // 15% of Vencimentos


//         let totalVencimentos = 0;
//         let totalDescontos = 0;

//         // Loop through "Vencimentos" inputs
//         document.querySelectorAll('table tbody tr').forEach(row => {
//             const vencimentoInput = row.querySelector('td:nth-child(4) input');
//             if (vencimentoInput) {
//                 const value = parseFloat(vencimentoInput.value.replace(',', '.')) || 0;
//                 totalVencimentos += value;
//             }

//             const descontoInput = row.querySelector('td:nth-child(5) input');
//             if (descontoInput) {
//                 const value = parseFloat(descontoInput.value.replace(',', '.')) || 0;
//                 totalDescontos += value;
//             }
//         });

//         // Calculate additional fields based on Vencimentos
//         const salarioBase = totalVencimentos * salarioBasePercentage;
//         const inss = totalVencimentos * inssPercentage;
//         const fgts = totalVencimentos * fgtsPercentage;
//         const irrf = totalVencimentos * irrfPercentage;

//         // Calculate F.G.T.S. do Mês based on Vencimentos
//         const fgtsMes = totalVencimentos * fgtsPercentage; // Calculate F.G.T.S. do Mês as 8% of Vencimentos


//         // Update total fields

//         totalVencimentosInput.value = totalVencimentos.toFixed(2).replace('.', ',');
//         totalDescontosInput.value = totalDescontos.toFixed(2).replace('.', ',');
//         valorLiquidoInput.value = (totalVencimentos - totalDescontos).toFixed(2).replace('.', ',');
        
//         // Update additional fields
//         document.getElementById('salarioBase').value = salarioBase.toFixed(2).replace('.', ',');
//         document.getElementById('inss').value = inss.toFixed(2).replace('.', ',');
//         document.getElementById('fgts').value = fgts.toFixed(2).replace('.', ',');
//         document.getElementById('irrf').value = irrf.toFixed(2).replace('.', ',');
//         document.getElementById('fgtsMes').value = fgtsMes.toFixed(2).replace('.', ',');


//         totalVencimentosInput.value = totalVencimentos.toFixed(2).replace('.', ',');
//         totalDescontosInput.value = totalDescontos.toFixed(2).replace('.', ',');
//         valorLiquidoInput.value = (totalVencimentos - totalDescontos).toFixed(2).replace('.', ',');
//     }

//     // Add event listeners to inputs
//     document.querySelectorAll('table tbody input').forEach(input => {
//         input.addEventListener('input', calcularTotais);
//     });

//     // Initial calculation
//     calcularTotais();
// });

// </script>  DO PROFESSOR
document.addEventListener("DOMContentLoaded", () => {
 
    const formatarNumero = (num) => num.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
 
    const parseNumero = (numStr) => parseFloat(numStr.replace(/\./g, '').replace(',', '.')) || 0;
 
    const atualizaFolhaPagamento = () => {
      const campoVencimento = document.querySelector('table tbody tr td:nth-child(4) input');
      const salarioBase = parseNumero(campoVencimento.value);
 
      // Exemplo simplificado das bases para impostos (você pode ajustar as fórmulas conforme as regras reais)
      const baseInss = salarioBase;
      const fgtsMes = salarioBase * 0.08; // FGTS normalmente 8%
      const baseIrrf = salarioBase;
 
      // Cálculos fictícios para impostos (ajuste com valores reais)
      const descontoInss = salarioBase * 0.11; // exemplo: INSS 11%
      const descontoIrrf = salarioBase * 0.05; // exemplo: IRRF 5%
 
      const totalDescontos = descontoInss + descontoIrrf;
      const valorLiquido = salarioBase - totalDescontos;
 
      // Atualiza campos no HTML
      document.getElementById('totalVencimentos').value = formatarNumero(salarioBase);
      document.getElementById('totalDescontos').value = formatarNumero(totalDescontos);
      document.getElementById('valorLiquido').value = formatarNumero(valorLiquido);
 
      // Informações adicionais
      const adicionais = document.querySelectorAll('.informacoes-adicionais input');
      adicionais[0].value = formatarNumero(salarioBase); // Salário Base
      adicionais[1].value = formatarNumero(baseInss);    // Sal. Contr. INSS
      adicionais[2].value = formatarNumero(salarioBase); // Base Cátc. FGTS
      adicionais[3].value = formatarNumero(fgtsMes);     // F.G.T.S. do Mês
      adicionais[4].value = formatarNumero(baseIrrf);    // Base Cátc. IRRF
    };
 
    // Remover todos os eventos que chamam a função de cálculo
    // document.querySelectorAll('table tbody input').forEach(input => {
    //     input.removeEventListener('input', calcularTotais);
    // });

    // Remover o evento de mudança do campo vencimentos
    // const campoVencimento = document.querySelector('table tbody tr td:nth-child(4) input');
    // campoVencimento.removeEventListener('change', atualizaFolhaPagamento);

    // Remover o cálculo inicial
    // atualizaFolhaPagamento();

    // Adicionar o evento de clique no botão
    const botaoGerar = document.querySelector('.botaoGerar');
    botaoGerar.addEventListener('click', atualizaFolhaPagamento);
 
  });
