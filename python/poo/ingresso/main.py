from venda_ingresso import VendaIngressos

if __name__ == "__main__":
    sistema_vendas = VendaIngressos()
    sistema_vendas.vender_ingresso("normal", 3)
    sistema_vendas.vender_ingresso("vip", 2)
    sistema_vendas.exibir_total_vendas()
