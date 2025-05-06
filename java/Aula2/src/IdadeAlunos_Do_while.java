import java.util.Scanner;
public class IdadeAlunos_Do_while {

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);

	        int idade;
	        int contador = 0;
	        int maiorIdade = 0;
	        
	        do {
	            System.out.print("Digite a idade do aluno (99 para sair): ");
	            idade = scanner.nextInt();

	            if (idade != 99) {
	                contador++;

	                if (idade > maiorIdade) {
	                    maiorIdade = idade;
	                }
	            }
	        } while (idade != 99);

	        System.out.println("\nTotal de alunos na turma: " + contador);
	        System.out.println("Maior idade informada: " + maiorIdade);

	        scanner.close();
	    }
	}
