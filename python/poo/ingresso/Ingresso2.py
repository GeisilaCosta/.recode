# class Ingresso:
#     # Preços fixos dos ingressos
#     PRECO_NORMAL = 50.00
#     PRECO_VIP = 100.00

#     def __init__(self, tipo_ingresso):
#         """Inicializa o ingresso com o tipo especificado"""
#         self.tipo_ingresso = tipo_ingresso
#         self.valor = self.PRECO_NORMAL if tipo_ingresso == "Normal" else self.PRECO_VIP

#     def exibir_detalhes(self):
#         """Exibe os detalhes do ingresso"""
#         print(f"Ingresso {self.tipo_ingresso} - Valor: R$ {self.valor:.2f}")

# class VendaIngressos:
#     def __init__(self):
#         """Inicializa a classe de vendas de ingressos"""
#         self.vendas = []
#         self.total_ingressos = 0
#         self.total_arrecadado = 0.0


#     def vender_ingresso(self, tipo, quantidade):
#         """
#         Vende ingressos e registra a venda
        
#         Args:
#             tipo (str): Tipo do ingresso ("normal" ou "vip")
#             quantidade (int): Quantidade de ingressos a serem vendidos
#         """
#         ingresso = Ingresso(tipo)
#         valor_total = ingresso.valor * quantidade
#         self.vendas.append({
#             'tipo': tipo,
#             'quantidade': quantidade,
#             'valor_total': valor_total
#         })
#         self.total_ingressos += quantidade
#         self.total_arrecadado += valor_total
#         print(f"Venda realizada: {quantidade} ingressos {tipo} - Total: R$ {valor_total:.2f}")

#     def exibir_total_vendas(self):
#         """Exibe o total de ingressos vendidos e valor arrecadado"""
#         print(f"Total de ingressos vendidos: {self.total_ingressos}")
#         print(f"Valor total arrecadado: R$ {self.total_arrecadado:.2f}")
