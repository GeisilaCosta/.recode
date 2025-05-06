package carros;

public class Carro {
	//atributos
	String nome;
	String marca;
	int ano;
	int vel;
	
	//metodos
	
	void acelerar(int aceleracao) {
		vel+=aceleracao;
	}
	void frear(int reduzir) {
		vel-=reduzir;
	}
	void buzinar() {
		System.out.println("bibibih");
	}
}
