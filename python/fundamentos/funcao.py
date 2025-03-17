# Criar um função que receba como parametro nome e sobrenome e com a função join retorne o nome completo

nome = input("Digite seu nome: ")
sobrenome = input("Digite seu sobrenome: ")

def nome_completo(nome, sobrenome):
    return f"{nome} {sobrenome}"

print(nome_completo(nome, sobrenome))