import json
import requests

def salvar_dados(nome_arquivo, dados):
    with open(nome_arquivo, "w") as arquivo:
        json.dump(dados, arquivo)

def carregar_dados(nome_arquivo):
    try:
        with open(nome_arquivo, "r") as arquivo:
            return json.load(arquivo)
    except FileNotFoundError:
        return []
    


