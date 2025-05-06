import java.util.Scanner; 

public class ReajusteSalarial_vetores {

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);

	        String[] nomes = new String[5];
	        double[] salarios = new double[5];

	        // Cadastrando os funcionários e seus salarios de acordo com o indice
	        for (int i = 0; i < 5; i++) {
	            System.out.print("Digite o nome do " + (i + 1) + "º funcionário: ");
	            nomes[i] = scanner.nextLine();

	            System.out.print("Digite o salário de " + nomes[i] + ": R$ ");
	            salarios[i] = scanner.nextDouble();
	            scanner.nextLine(); // limpar quebra de linha
	        }

	        // Fazendo o calculo do reajuste
	        System.out.print("\nDigite o índice de reajuste salarial (%): ");
	        double indice = scanner.nextDouble();

	        // Mostrando os  dados com novo salário
	        System.out.println("\n--- Dados dos Funcionários com Reajuste ---");
	        for (int i = 0; i < 5; i++) {
	            double novoSalario = salarios[i] + (salarios[i] * indice / 100);
	            System.out.printf("Nome: %s | Salário antigo: R$ %.2f | Novo salário: R$ %.2f\n",
	                    nomes[i], salarios[i], novoSalario);
	        }

	        scanner.close();
	    }
	}