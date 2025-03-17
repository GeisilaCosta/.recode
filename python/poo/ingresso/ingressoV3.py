class Vendas:
    def __init__(self):
        self.total_ingressos = 0
        self.total_vendas = 0
        self.total_ingressos_normais = 0
        self.total_ingressos_vips = 0


    def vender(self, tipo, quantidade):
        if tipo == "normal":
            self.total_vendas += (quantidade * 50)
            self.total_ingressos += quantidade
            self.total_ingressos_normais += quantidade
        elif tipo == "vip":
            self.total_vendas += (quantidade * 100)
            self.total_ingressos += quantidade
            self.total_ingressos_vips += quantidade


    def informacoes(self):
                print(f"Valor total arrecadado: R$ {self.total_vendas:.2f}")
                print(f"Total de ingressos vendidos: {self.total_ingressos}")
                print(f"Total de ingressos normais vendidos: {self.total_ingressos_normais}")
                print(f"Total de ingressos Vips vendidos: {self.total_ingressos_vips}")





print(" ---------- Dados do sistema 1 ---------------- ")
sistema1 = Vendas()  
sistema1.vender("normal", 10)
sistema1.vender("vip", 5)
sistema1.informacoes()              

print(" ---------- Dados do sistema 2 ---------------- ")

sistema2 = Vendas()
sistema2.vender("vip", 100)
sistema2.informacoes()
