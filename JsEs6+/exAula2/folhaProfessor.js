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
 
    // Evento change do campo vencimentos
    const campoVencimento = document.querySelector('table tbody tr td:nth-child(4) input');
    campoVencimento.addEventListener('change', atualizaFolhaPagamento);
 
    // Cálculo inicial
    atualizaFolhaPagamento();
 
  });
 