 /*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos 
  * (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um código para 
  * processar e mostrar o custo final ao consumidor.*/
package aula1;
import java.util.Scanner;

public class CustoCarro {

	public static void main(String[] args) {
		  Scanner scanner = new Scanner(System.in);

	        // Entrada de dados
	        System.out.print("Digite o custo de fábrica do carro: ");
	        double custoFabrica = scanner.nextDouble();

	        // Percentuais fixos
	        double percentualDistribuidor = 0.28;
	        double percentualImpostos = 0.45;

	        // Cálculo dos acréscimos
	        double custoDistribuidor = custoFabrica * percentualDistribuidor;
	        double custoImpostos = custoFabrica * percentualImpostos;

	        // Cálculo do custo final
	        double custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

	        // Saída do resultado
	        System.out.println("O custo final ao consumidor é: R$ " + custoFinal);

	        scanner.close();

	}

}
