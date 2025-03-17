document.addEventListener('DOMContentLoaded', function() {
    const totalVencimentosInput = document.getElementById('totalVencimentos');
    const totalDescontosInput = document.getElementById('totalDescontos');
    const valorLiquidoInput = document.getElementById('valorLiquido');

    function calcularTotais() {
        const salarioBasePercentage = 1; // 100% of Vencimentos
        const inssPercentage = 0.11; // 11% of Vencimentos
        const fgtsPercentage = 0.08; // 8% of Vencimentos
        const irrfPercentage = 0.15; // 15% of Vencimentos


        let totalVencimentos = 0;
        let totalDescontos = 0;

        // Loop through "Vencimentos" inputs
        document.querySelectorAll('table tbody tr').forEach(row => {
            const vencimentoInput = row.querySelector('td:nth-child(4) input');
            if (vencimentoInput) {
                const value = parseFloat(vencimentoInput.value.replace(',', '.')) || 0;
                totalVencimentos += value;
            }

            const descontoInput = row.querySelector('td:nth-child(5) input');
            if (descontoInput) {
                const value = parseFloat(descontoInput.value.replace(',', '.')) || 0;
                totalDescontos += value;
            }
        });

        // Calculate additional fields based on Vencimentos
        const salarioBase = totalVencimentos * salarioBasePercentage;
        const inss = totalVencimentos * inssPercentage;
        const fgts = totalVencimentos * fgtsPercentage;
        const irrf = totalVencimentos * irrfPercentage;

        // Calculate F.G.T.S. do Mês based on Vencimentos
        const fgtsMes = totalVencimentos * fgtsPercentage; // Calculate F.G.T.S. do Mês as 8% of Vencimentos


        // Update total fields

        totalVencimentosInput.value = totalVencimentos.toFixed(2).replace('.', ',');
        totalDescontosInput.value = totalDescontos.toFixed(2).replace('.', ',');
        valorLiquidoInput.value = (totalVencimentos - totalDescontos).toFixed(2).replace('.', ',');
        
        // Update additional fields
        document.getElementById('salarioBase').value = salarioBase.toFixed(2).replace('.', ',');
        document.getElementById('inss').value = inss.toFixed(2).replace('.', ',');
        document.getElementById('fgts').value = fgts.toFixed(2).replace('.', ',');
        document.getElementById('irrf').value = irrf.toFixed(2).replace('.', ',');
        document.getElementById('fgtsMes').value = fgtsMes.toFixed(2).replace('.', ',');


        totalVencimentosInput.value = totalVencimentos.toFixed(2).replace('.', ',');
        totalDescontosInput.value = totalDescontos.toFixed(2).replace('.', ',');
        valorLiquidoInput.value = (totalVencimentos - totalDescontos).toFixed(2).replace('.', ',');
    }

    // Add event listeners to inputs
    document.querySelectorAll('table tbody input').forEach(input => {
        input.addEventListener('input', calcularTotais);
    });

    // Initial calculation
    calcularTotais();
});
