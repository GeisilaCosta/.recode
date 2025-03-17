class Aluno:
    def __init__(self, nome, idade, curso):
        self.nome = nome
        self.idade = idade
        self.curso = curso

aluno = Aluno("Joaquim", 18, "ADS")


#######Dicionario
aluno = {
    "nome": "Joaquim",
    "idade": 18,
    "curso": "ADS"
}

# Exibir todas as informações do aluno
print("Nome:", aluno["nome"])
print("Idade:", aluno["idade"])
print("Curso:", aluno["curso"])