import random

# Definir la baraja de cartas
Baraja = [
    "AS de Picas", "Dos de Picas", "Tres de Picas", "Cuatro de Picas", "Cinco de Picas", "Seis de Picas", "Siete de Picas", "Ocho de Picas", "Nueve de Picas", "J de Picas", "Q de Picas", "K de Picas",
    "AS de Diamantes", "Dos de Diamantes", "Tres de Diamantes", "Cuatro de Diamantes", "Cinco de Diamantes", "Seis de Diamantes", "Siete de Diamantes", "Ocho de Diamantes", "Nueve de Diamantes", "J de Diamantes", "Q de Diamantes", "K de Diamantes",
    "AS de Treboles", "Dos de Treboles", "Tres de Treboles", "Cuatro de Treboles", "Cinco de Treboles", "Seis de Treboles", "Siete de Treboles", "Ocho de Treboles", "Nueve de Treboles", "J de Treboles", "Q de Treboles", "K de Treboles",
    "AS de Corazones", "Dos de Corazones", "Tres de Corazones", "Cuatro de Corazones", "Cinco de Corazones", "Seis de Corazones", "Siete de Corazones", "Ocho de Corazones", "Nueve de Corazones", "J de Corazones", "Q de Corazones", "K de Corazones"
]

# Asignar valores numéricos a las cartas
valores = {
    "AS": [1, 11],
    "Dos": [2],
    "Tres": [3],
    "Cuatro": [4],
    "Cinco": [5],
    "Seis": [6],
    "Siete": [7],
    "Ocho": [8],
    "Nueve": [9],
    "J": [10],
    "Q": [10],
    "K": [10]
}

# Crear un diccionario que mapea cada carta de la baraja a sus valores
valores_baraja = {}
for carta in Baraja:
    nombre = carta.split(" de ")[0]
    valores_baraja[carta] = valores[nombre]


# Definir las manos de los jugadores
jugador = []
crupier = []

# Función para repartir cartas
def repartir():
    global jugador
    global crupier
    # Barajar la baraja
    random.shuffle(Baraja)
    # Repartir dos cartas al jugador y al crupier
    jugador = random.sample(Baraja, 2)
    crupier = random.sample(Baraja, 2)

    # Eliminar las cartas repartidas de la baraja
    Baraja.remove(jugador[0])
    Baraja.remove(jugador[1])
    Baraja.remove(crupier[0])
    Baraja.remove(crupier[1])

# Función para calcular el mejor valor posible para la mano
def calcular_mejor_valor(mano):
    valores_posibles = [0]
    for carta in mano:
        nuevos_valores = []
        for valor in valores_baraja[carta]:
            nuevos_valores.extend([x + valor for x in valores_posibles])
        valores_posibles = nuevos_valores
    # Filtrar valores mayores de 21 y retornar el máximo valor válido o el mínimo si todos son mayores
    valores_validos = [v for v in valores_posibles if v <= 21]
    return max(valores_validos) if valores_validos else min(valores_posibles)

# Llamar a la función repartir para asignar cartas
repartir()

# Calcular el valor total de las cartas del jugador y del crupier
valor_jugador = calcular_mejor_valor(jugador)
valor_crupier = calcular_mejor_valor(crupier)

# Imprimir las cartas y el valor total
print("Cartas del jugador:", jugador)
print("Valor total de las cartas del jugador:", valor_jugador)
print("Cartas del crupier:", crupier)
print("Valor total de las cartas del crupier:", valor_crupier)
