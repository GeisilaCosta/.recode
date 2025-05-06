package carros;

public class CarroTeste {

	public static void main(String[] args) {
		Carro c1= new Carro();
		c1.nome = "ford ka";
		c1.marca = "ford";
		c1.ano = 99;
		c1.vel = 80;
		
		c1.acelerar(20);
		System.out.println("O carro esta a " + c1.vel + "Km");
		c1.frear(25);
		System.out.println("O carro esta a " + c1.vel + "Km");
		c1.buzinar();

	}

}
