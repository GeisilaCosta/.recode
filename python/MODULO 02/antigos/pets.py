# pets = []

# def cadastrar_pet():
#     try:
#         nome = input("Nome do pet: ")
#         especie = input("Espécie (Cachorro, Gato, etc.): ")
#         idade = int(input("Idade do pet (em anos): "))
#         saudavel = input("O pet está saudável? (s/n): ").lower() == 's'

#         categoria = "Filhote" if idade < 2 else "Adulto" if idade < 8 else "Sênior"
#         pet = {"nome": nome, "espécie": especie, "idade": idade, "categoria": categoria, "saudável": saudavel}
#         pets.append(pet)
#         print(f"\n✅ Pet {nome} cadastrado com sucesso!")

#     except ValueError:
#         print("❌ Erro: Idade deve ser um número válido!")

# def listar_pets():
#     print("\n📋 LISTA DE PETS CADASTRADOS:")
#     for pet in pets:
#         status = "Sim" if pet["saudável"] else "Não"
#         print(f"🐾 Nome: {pet['nome']} | Espécie: {pet['espécie']} | Idade: {pet['idade']} anos | Saudável: {status}")
