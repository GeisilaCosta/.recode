agendamentos = []
def agendar_servico():
    dono = input("Nome do cliente: ")
    pet = input("Nome do pet: ")
    servico = input("Serviço (Banho, Tosa, Consulta): ")
    agendamentos.append({"dono": dono, "pet": pet, "serviço": servico})
    print(f"\n📅 Serviço '{servico}' agendado para {pet}!")

def listar_servicos():
    print("\n📋 LISTA DE SERVIÇOS AGENDADOS:")
    for agendamento in agendamentos:
        print(f"📅 {agendamento['dono']} agendou {agendamento['serviço']} para {agendamento['pet']}")
