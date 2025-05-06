import java.util.ArrayList;
import java.util.Scanner;

public class Agenda_array_list {

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);
	        ArrayList<String> agenda = new ArrayList<>();
	        int opcao;

	        do {
	            System.out.println("\n--- AGENDA ---");
	            System.out.println("1 - Inserir contato");
	            System.out.println("2 - Excluir contato");
	            System.out.println("3 - Mostrar todos os contatos");
	            System.out.println("4 - Pesquisar contato por nome");
	            System.out.println("5 - Sair");
	            System.out.print("Escolha uma opção: ");
	            opcao = scanner.nextInt();
	            scanner.nextLine(); // limpar o buffer

	            switch (opcao) {
	                case 1:
	                    System.out.print("Digite o nome: ");
	                    String nome = scanner.nextLine();
	                    System.out.print("Digite o telefone: ");
	                    String telefone = scanner.nextLine();
	                    agenda.add("Nome: " + nome + " | Telefone: " + telefone);
	                    System.out.println("Contato adicionado!");
	                    break;

	                case 2:
	                    System.out.print("Digite o nome do contato para excluir: ");
	                    String nomeExcluir = scanner.nextLine();
	                    boolean removido = false;
	                    for (int i = 0; i < agenda.size(); i++) {
	                        if (agenda.get(i).toLowerCase().contains("nome: " + nomeExcluir.toLowerCase())) {
	                            agenda.remove(i);
	                            removido = true;
	                            System.out.println("Contato removido.");
	                            break;
	                        }
	                    }
	                    if (!removido) {
	                        System.out.println("Contato não encontrado.");
	                    }
	                    break;

	                case 3:
	                    System.out.println("\n--- Contatos da Agenda ---");
	                    if (agenda.isEmpty()) {
	                        System.out.println("Agenda vazia.");
	                    } else {
	                        for (String contato : agenda) {
	                            System.out.println(contato);
	                        }
	                    }
	                    break;

	                case 4:
	                    System.out.print("Digite o nome para pesquisar: ");
	                    String nomeBuscar = scanner.nextLine();
	                    boolean encontrado = false;
	                    for (String contato : agenda) {
	                        if (contato.toLowerCase().contains("nome: " + nomeBuscar.toLowerCase())) {
	                            System.out.println("Contato encontrado: " + contato);
	                            encontrado = true;
	                        }
	                    }
	                    if (!encontrado) {
	                        System.out.println("Contato não encontrado.");
	                    }
	                    break;

	                case 5:
	                    System.out.println("Encerrando...");
	                    break;

	                default:
	                    System.out.println("Opção inválida!");
	            }
	        } while (opcao != 5);

	        scanner.close();
	    }
	}