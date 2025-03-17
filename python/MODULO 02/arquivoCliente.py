def salvar_cliente():
    nomeCliente = input("Nome: ")
    telefone = input("Telefone: ")
    nomePet = input("Nome do seu pet: ")
    with open("clientes.txt", "a") as arquivo:
        arquivo.write(f"{nomeCliente},{telefone},{nomePet}\n")

# salvar_cliente(nomeCliente, telefone, nomePet)

print("Salvo com sucesso!")


def listar_clientes():
    with open("clientes.txt", "r") as arquivo:
        clientes = arquivo.readlines()
        for cliente in clientes:
            cliente = cliente.strip()
            if cliente:  # Verifica se a linha não está vazia
                try:
                    nomeCliente, telefone, nomePet = cliente.split(",")
                    print(f"nome: {nomeCliente}, telefone: {telefone}, pet: {nomePet}")
                except ValueError:
                    print(f"⚠️ Erro ao processar linha: {cliente}")

# listar_clientes()
