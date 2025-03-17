from Ingresso import Ingresso

class VendaIngressos:
    def __init__(self):
        self.total_vendas = 0
        self.total_ingressos = 0
    
    def vender_ingresso(self, tipo, quantidade):
        if quantidade <= 0:
            raise ValueError("A quantidade deve ser maior que zero.")
        
        ingresso = Ingresso(tipo)
        total_compra = ingresso.valor * quantidade
        
        self.total_ingressos += quantidade
        self.total_vendas += total_compra
        
        print(f"Venda realizada: {quantidade} ingresso(s) {tipo.upper()} - Total: R$ {total_compra:.2f}")
    
    def exibir_total_vendas(self):
        print("--- Total de Vendas do Dia ---")
        print(f"Ingressos vendidos: {self.total_ingressos}")
        print(f"Valor total arrecadado: R$ {self.total_vendas:.2f}")
