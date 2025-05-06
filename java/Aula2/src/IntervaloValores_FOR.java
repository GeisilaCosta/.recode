import java.util.Scanner;

public class IntervaloValores_FOR {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dentro = 0;
        int fora = 0;

        for (int i = 1; i <= 10; i++) {
            System.out.print("Digite o " + i + "º valor: ");
            int valor = scanner.nextInt();

            if (valor >= 10 && valor <= 20) {
                dentro++;
            } else {
                fora++;
            }
        }

        System.out.println("\nQuantidade de valores no intervalo [10, 20]: " + dentro);
        System.out.println("Quantidade de valores fora do intervalo: " + fora);

        scanner.close();
    }
}
