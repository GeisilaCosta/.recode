pets = []
 
while True:
    print("\n🐶 PETSHOP MANAGER - MENU PRINCIPAL 🐾\n1 - Cadastrar Pet\n2 - Listar Pets\n3 - Sair")
    opcao = input("Escolha uma opção: ")
 
   
    if opcao == "1":
        pets.append({"nome": input("Nome do pet: "),
            "espécie": input("Espécie (Cachorro, Gato, etc.): "),
            "idade": (idade := int(input("Idade do pet (em anos): "))),
            "categoria": "Filhote" if idade < 2 else "Adulto" if idade < 8 else "Sênior",
            "saudável": input("O pet está saudável? (s/n): ").strip().lower() == 's'      
        })
        print(f"\n✅ Pet {pets[-1]['nome']} cadastrado com sucesso!")
 
    elif opcao == "2":
        print("\n📋 LISTA DE PETS CADASTRADOS:")
        for pet in pets:
            print(f"🐾 Nome: {pet['nome']} | Espécie: {pet['espécie']} | Idade: {pet['idade']} anos | Saudável: {'Sim' if pet['saudável'] else 'Não'}")
 
    elif opcao == "3":
        print("👋 Saindo do sistema...")
        break
 
    else:
        print("❌ Opção inválida! Tente novamente.");