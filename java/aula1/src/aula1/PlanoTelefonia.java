package aula1;

import java.util.Scanner;

public class PlanoTelefonia {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Entrada de dados
        System.out.print("Digite os minutos utilizados: ");
        int minutosUsados = scanner.nextInt();

        double valorBase = 50.0;
        double valorFinal;

        if (minutosUsados <= 100) {
            valorFinal = valorBase;
        } else {
            int minutosExcedentes = minutosUsados - 100;
            valorFinal = valorBase + (minutosExcedentes * 2.0);
        }

        // Saída
        System.out.printf("O valor a ser pago é R$ %.2f\n", valorFinal);

        scanner.close();
    }
}

