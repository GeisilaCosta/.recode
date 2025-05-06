
import java.util.Scanner;

public class IdadeAlunos_while {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int idade;
        int contador = 0;
        int maiorIdade = 0;

        System.out.print("Digite a idade do aluno (99 para sair): ");
        idade = scanner.nextInt();

        while (idade != 99) {
            contador++;

            if (idade > maiorIdade) {
                maiorIdade = idade;
            }

            System.out.print("Digite a idade do próximo aluno (99 para sair): ");
            idade = scanner.nextInt();
        }

        System.out.println("\nTotal de alunos na turma: " + contador);
        System.out.println("Maior idade informada: " + maiorIdade);

        scanner.close();
    }
}
