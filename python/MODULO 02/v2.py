clientes = []
agendamentos = []

while True:
    print("\n📋 MENU - GERENCIAMENTO DE CLIENTES E SERVIÇOS 🛁")
    print("1 - Cadastrar Cliente")
    print("2 - Listar Clientes")
    print("3 - Agendar Serviço")
    print("4 - Listar Serviços")
    print("5 - Cancelar Agendamento")
    print("6 - Voltar ao Menu Principal")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        nome = input("Nome do cliente: ")
        telefone = input("Telefone: ")
        pet = input("Nome do pet: ")
        clientes.append({"nome": nome, "telefone": telefone, "pet": pet})
        print(f"\n✅ Cliente {nome} cadastrado com sucesso!")

    elif opcao == "2":
        print("\n📋 LISTA DE CLIENTES:")
        for cliente in clientes:
            print(f"👤 Nome: {cliente['nome']} | Telefone: {cliente['telefone']} | Pet: {cliente['pet']}")

    elif opcao == "3":
        dono = input("Nome do cliente: ")
        pet = input("Nome do pet: ")
        servico = input("Serviço (Banho, Tosa, Consulta): ")
        agendamentos.append({"dono": dono, "pet": pet, "serviço": servico})
        print(f"\n📅 Serviço '{servico}' agendado para {pet}!")

    elif opcao == "4":
        print("\n📋 LISTA DE SERVIÇOS AGENDADOS:")
        for agendamento in agendamentos:
            print(f"📅 {agendamento['dono']} agendou {agendamento['serviço']} para {agendamento['pet']}")

    elif opcao == "5":
        pet = input("Nome do pet para cancelar agendamento: ")
        agendamentos = [a for a in agendamentos if a['pet'] != pet]
        print("\n❌ Agendamento cancelado!")

    elif opcao == "6":
        break

    else:
        print("❌ Opção inválida! Tente novamente.")
