package aula1;
import java.util.Scanner;

public class VelocidadeMedia {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Entrada de dados
        System.out.print("Digite o nome do piloto: ");
        String nomePiloto = scanner.nextLine();

        System.out.print("Digite a distância percorrida em km: ");
        double distancia = scanner.nextDouble();

        System.out.print("Digite o tempo gasto em horas: ");
        double tempo = scanner.nextDouble();

        // Cálculo da velocidade média
        double velocidadeMedia = distancia / tempo;

        // Saída formatada
        System.out.printf("A velocidade média de %s foi %.2f km/h.\n", nomePiloto, velocidadeMedia);

        scanner.close();
    }
}

/*2 – Desenvolva um código que seja atribuído a uma variável o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou 
 */