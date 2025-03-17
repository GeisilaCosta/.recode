class Ingresso:
    VALORES = {
        "normal": 50.00,
        "vip": 100.00
    }
    
    def __init__(self, tipo):
        if tipo not in self.VALORES:
            raise ValueError("Tipo de ingresso inválido.")
        self.tipo = tipo
        self.valor = self.VALORES[tipo]
