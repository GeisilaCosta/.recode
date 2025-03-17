class Caixa:
    def __init__(self):
     self.saldo=1000

    def sacar(self, valor):

        if valor <= self.saldo:self.saldo -= valor
        print(f"Saquede R$ {valor}realizado com sucesso.")
        else:

        print("Saldo insuficiente.")

    def depositar(self, valor):

        self.saldo+=valor
        print(f"Depósito de R$ {valor} realizado com sucesso.")


    def exibir_saldo(self):

        return self.saldo

        
    caixa=Caixa()
    caixa.depositar(500)
    print("Saldo atual:", caixa.exibir_saldo())
