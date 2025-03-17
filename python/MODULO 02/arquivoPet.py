def salvar_pet():
    nomePet = input("Nome: ")
    especie = input("Espécie: ")
    idadePet = input("Idade: ")
    categoria = input("Categoria: ")
    saudavel = input("Saudável: ")
    with open("pets.txt", "a") as arquivo:
        arquivo.write(f"{nomePet},{especie},{idadePet},{categoria},{saudavel}\n")

# salvar_pet(nomePet, especie, idadePet, categoria, saudavel)

print("Salvo com sucesso!")


def listar_pets():
    with open("pets.txt", "r") as arquivo:
        pets = arquivo.readlines()
        for pet in pets:
            nomePets, especie, idade, categoria, saudavel = pet.strip().split(",")
            print(f"Nome: {nomePets}, Espécie: {especie}, Idade: {idade}, Categoria: {categoria}, Saudável: {saudavel}")

# listar_pets()
