package aula1;

import java.util.Scanner;

public class ConversorDeMoedas {

	public static void main(String[] args) {
		 
		        Scanner scanner = new Scanner(System.in);

		        // Entrada de dados
		        System.out.print("Digite o valor em reais (BRL): ");
		        double valorBRL = scanner.nextDouble();

		        System.out.println("Escolha a moeda para conversão (USD, EUR, GBP, JPY, CHF, CAD, AUD): ");
		        String moeda = scanner.next().toUpperCase();

		        double resultado;

		        switch (moeda) {
		            case "USD":
		                resultado = valorBRL / 5.4082;
		                break;
		            case "EUR":
		                resultado = valorBRL / 6.4548;
		                break;
		            case "GBP":
		                resultado = valorBRL / 6.4125;
		                break;
		            case "JPY":
		                resultado = valorBRL / 0.03905;
		                break;
		            case "CHF":
		                resultado = valorBRL / 5.5402;
		                break;
		            case "CAD":
		                resultado = valorBRL / 4.1548;
		                break;
		            case "AUD":
		                resultado = valorBRL / 3.6732;
		                break;
		            default:
		                System.out.println("Moeda inválida!");
		                scanner.close();
		                return;
		        }

		        System.out.printf("R$ %.2f em %s equivale a %.2f %s\n", valorBRL, moeda, resultado, moeda);
		        scanner.close();
		    }
		}