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
    global jugador, crupier, Baraja
    random.shuffle(Baraja)
    jugador = [Baraja.pop() for _ in range(2)]
    crupier = [Baraja.pop() for _ in range(2)]

# Función para calcular el mejor valor posible para la mano
def calcular_mejor_valor(mano):
    valores_posibles = [0]
    for carta in mano:
        nuevos_valores = []
        for valor in valores_baraja[carta]:
            nuevos_valores.extend([x + valor for x in valores_posibles])
        valores_posibles = nuevos_valores

    valores_validos = [v for v in valores_posibles if v <= 21]
    return max(valores_validos) if valores_validos else min(valores_posibles)

# Función para pedir una carta adicional
def pedir():
    global jugador
    nueva_carta = Baraja.pop()
    jugador.append(nueva_carta)
    nuevo_valor_jugador = calcular_mejor_valor(jugador)
    print("Cartas del jugador:", jugador)

# Función para pasar el turno al crupier
def pasar():
    global crupier
    valor_crupier = calcular_mejor_valor(crupier)
    print("Cartas del crupier:", crupier)
    while valor_crupier < 17:
        nueva_carta = Baraja.pop()
        crupier.append(nueva_carta)
        valor_crupier = calcular_mejor_valor(crupier)
        print("Cartas del crupier:", crupier)
    return valor_crupier

# Función para pedir o pasar
def pedir_pasar():
    while True:
        if calcular_mejor_valor(jugador) != 21:
            try:
                opcion = int(input("Pedir -> 1 || Pasar -> 2: "))
                if opcion == 1:
                    pedir()
                    if calcular_mejor_valor(jugador) > 21:
                        print("Te has pasado de 21. Pierdes.")
                        return False
                elif opcion == 2:
                    valor_crupier = pasar()
                    valor_jugador = calcular_mejor_valor(jugador)
                    if valor_crupier > 21 or valor_jugador > valor_crupier:
                        print("¡Ganaste!")
                    elif valor_jugador == valor_crupier:
                        print("Empate.")
                    else:
                        print("El crupier gana.")
                    return False
                else:
                    print("Entrada no válida. Por favor, ingrese 1 para pedir o 2 para pasar.")
            except ValueError:
                print("Entrada no válida. Por favor, ingrese un número entero.")
        else:
            valor_crupier = pasar()
            valor_jugador = calcular_mejor_valor(jugador)
            if valor_crupier > 21 or valor_jugador > valor_crupier:
                print("¡Ganaste!")
            
            else:
                print("Empate.")
            return False

# Función principal para jugar
def jugar():
    global jugador, crupier, Baraja
    Baraja = [
        "AS de Picas", "Dos de Picas", "Tres de Picas", "Cuatro de Picas", "Cinco de Picas", "Seis de Picas", "Siete de Picas", "Ocho de Picas", "Nueve de Picas", "J de Picas", "Q de Picas", "K de Picas",
        "AS de Diamantes", "Dos de Diamantes", "Tres de Diamantes", "Cuatro de Diamantes", "Cinco de Diamantes", "Seis de Diamantes", "Siete de Diamantes", "Ocho de Diamantes", "Nueve de Diamantes", "J de Diamantes", "Q de Diamantes", "K de Diamantes",
        "AS de Treboles", "Dos de Treboles", "Tres de Treboles", "Cuatro de Treboles", "Cinco de Treboles", "Seis de Treboles", "Siete de Treboles", "Ocho de Treboles", "Nueve de Treboles", "J de Treboles", "Q de Treboles", "K de Treboles",
        "AS de Corazones", "Dos de Corazones", "Tres de Corazones", "Cuatro de Corazones", "Cinco de Corazones", "Seis de Corazones", "Siete de Corazones", "Ocho de Corazones", "Nueve de Corazones", "J de Corazones", "Q de Corazones", "K de Corazones"
    ]

    repartir()

    print("Cartas del jugador:", jugador)
    print("Carta del crupier:", crupier[0])

    pedir_pasar()

# Iniciar el juego
while True:
    jugar()
