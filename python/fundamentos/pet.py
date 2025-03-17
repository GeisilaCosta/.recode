# nome = str(input("Digite o nome do pet: "))
# especie = str(input("Digite a especie do pet: "))
# idade = int(input("Digite a idade do pet: "))
# saude = str(input("o pet esta saudavel: "))

# print("bem vindo ao petshop")

# OPCAO = 0
# while OPCAO != 4:
#     print("digite a opcao desejada")
#     print("1 - cadastrar pet")
#     print("2 - listar pet")
#     print("3 - sair")
#     OPCAO = int(input())

#     if OPCAO == 1:
#         print("cadastrar pet")
#         nome = str(input("Digite o nome do pet: "))
#         especie = str(input("Digite a especie do pet: "))
#         idade = int(input("Digite a idade do pet: "))
#         saude = str(input("o pet esta saudavel: "))
#     elif OPCAO == 2:
#         print("listar pet")
#         print(f"nome: {nome}")
#         print(f"especie: {especie}")
#         print(f"idade: {idade}")
#         print(f"saude: {saude}")
#     elif OPCAO == 3:
#         print("sair")
#     else:
#         print("opcao invalida")
  
  
pets = {}

while True:
    print("PET SHOP MANAGER")
    print("1 - CADASTRAR PET")
    print("2 - LISTAR PETS")
    print("3 - SAIR DO SISTEMA")
 
    opcao = input("Escolha uma opção: ")
 
    if opcao == "1":
 
        nome = input("Nome do pet: ")
        especie = input("Espécie (cachorro, gato, etc.): ")
        idade = input("Idade do pet: ")
 
        pets[nome] = {"Espécie": especie, "Idade": idade}
        print(f"Pet '{nome}' cadastrado com sucesso!")
 
    elif opcao == "2":
 
        if not pets:
            print("Nenhum pet cadastrado ainda.")
        else:
            print("\nLista de Pets Cadastrados:")
            for nome, info in pets.items():
                print(f"- Nome: {nome}, Espécie: {info['Espécie']}, Idade: {info['Idade']} anos")
 
    elif opcao == "3":
        print("Saindo do sistema... Até logo!")
        break
 
    else:
        print("Opção inválida! Escolha uma opção válida.")