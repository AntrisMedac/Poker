<?php

// Definir la baraja de cartas
$Baraja = [
    "AS de Picas", "Dos de Picas", "Tres de Picas", "Cuatro de Picas", "Cinco de Picas", "Seis de Picas", "Siete de Picas", "Ocho de Picas", "Nueve de Picas", "J de Picas", "Q de Picas", "K de Picas",
    "AS de Diamantes", "Dos de Diamantes", "Tres de Diamantes", "Cuatro de Diamantes", "Cinco de Diamantes", "Seis de Diamantes", "Siete de Diamantes", "Ocho de Diamantes", "Nueve de Diamantes", "J de Diamantes", "Q de Diamantes", "K de Diamantes",
    "AS de Treboles", "Dos de Treboles", "Tres de Treboles", "Cuatro de Treboles", "Cinco de Treboles", "Seis de Treboles", "Siete de Treboles", "Ocho de Treboles", "Nueve de Treboles", "J de Treboles", "Q de Treboles", "K de Treboles",
    "AS de Corazones", "Dos de Corazones", "Tres de Corazones", "Cuatro de Corazones", "Cinco de Corazones", "Seis de Corazones", "Siete de Corazones", "Ocho de Corazones", "Nueve de Corazones", "J de Corazones", "Q de Corazones", "K de Corazones"
];

// Asignar valores numéricos a las cartas
$valores = [
    "AS" => [1, 11],
    "Dos" => [2],
    "Tres" => [3],
    "Cuatro" => [4],
    "Cinco" => [5],
    "Seis" => [6],
    "Siete" => [7],
    "Ocho" => [8],
    "Nueve" => [9],
    "J" => [10],
    "Q" => [10],
    "K" => [10]
];

// Crear un array que mapea cada carta de la baraja a sus valores
$valores_baraja = [];
foreach ($Baraja as $carta) {
    $nombre = explode(" de ", $carta)[0];
    $valores_baraja[$carta] = $valores[$nombre];
}

// Definir las manos de los jugadores
$jugador = [];
$crupier = [];

// Función para repartir cartas
function repartir() {
    global $jugador, $crupier, $Baraja;
    shuffle($Baraja);
    $jugador = array_splice($Baraja, 0, 2);
    $crupier = array_splice($Baraja, 0, 2);
}

// Función para calcular el mejor valor posible para la mano
function calcular_mejor_valor($mano) {
    global $valores_baraja;
    $valores_posibles = [0];
    foreach ($mano as $carta) {
        $nuevos_valores = [];
        foreach ($valores_baraja[$carta] as $valor) {
            foreach ($valores_posibles as $x) {
                $nuevos_valores[] = $x + $valor;
            }
        }
        $valores_posibles = $nuevos_valores;
    }

    $valores_validos = array_filter($valores_posibles, function($v) {
        return $v <= 21;
    });
    return $valores_validos ? max($valores_validos) : min($valores_posibles);
}

// Función para pedir una carta adicional
function pedir() {
    global $jugador, $Baraja;
    $nueva_carta = array_pop($Baraja);
    $jugador[] = $nueva_carta;
    $nuevo_valor_jugador = calcular_mejor_valor($jugador);
    echo "Cartas del jugador: " . implode(", ", $jugador) . "\n";
}

// Función para pasar el turno al crupier
function pasar() {
    global $crupier, $Baraja;
    $valor_crupier = calcular_mejor_valor($crupier);
    echo "Cartas del crupier: " . implode(", ", $crupier) . "\n";
    while ($valor_crupier < 17) {
        $nueva_carta = array_pop($Baraja);
        $crupier[] = $nueva_carta;
        $valor_crupier = calcular_mejor_valor($crupier);
        echo "Cartas del crupier: " . implode(", ", $crupier) . "\n";
    }
    return $valor_crupier;
}

// Función para pedir o pasar
function pedir_pasar() {
    global $jugador;
    while (true) {
        if (calcular_mejor_valor($jugador) != 21) {
            echo "Pedir -> 1 || Pasar -> 2: ";
            $opcion = intval(trim(fgets(STDIN)));
            if ($opcion == 1) {
                pedir();
                if (calcular_mejor_valor($jugador) > 21) {
                    echo "Te has pasado de 21. Pierdes.\n";
                    return false;
                }
            } elseif ($opcion == 2) {
                $valor_crupier = pasar();
                $valor_jugador = calcular_mejor_valor($jugador);
                if ($valor_crupier > 21 || $valor_jugador > $valor_crupier) {
                    echo "¡Ganaste!\n";
                } elseif ($valor_jugador == $valor_crupier) {
                    echo "Empate.\n";
                } else {
                    echo "El crupier gana.\n";
                }
                return false;
            } else {
                echo "Entrada no válida. Por favor, ingrese 1 para pedir o 2 para pasar.\n";
            }
        } else {
            $valor_crupier = pasar();
            $valor_jugador = calcular_mejor_valor($jugador);
            if ($valor_crupier > 21 || $valor_jugador > $valor_crupier) {
                echo "¡Ganaste!\n";
            } else {
                echo "Empate.\n";
            }
            return false;
        }
    }
}

// Función principal para jugar
function jugar() {
    global $jugador, $crupier, $Baraja;
    $Baraja = [
        "AS de Picas", "Dos de Picas", "Tres de Picas", "Cuatro de Picas", "Cinco de Picas", "Seis de Picas", "Siete de Picas", "Ocho de Picas", "Nueve de Picas", "J de Picas", "Q de Picas", "K de Picas",
        "AS de Diamantes", "Dos de Diamantes", "Tres de Diamantes", "Cuatro de Diamantes", "Cinco de Diamantes", "Seis de Diamantes", "Siete de Diamantes", "Ocho de Diamantes", "Nueve de Diamantes", "J de Diamantes", "Q de Diamantes", "K de Diamantes",
        "AS de Treboles", "Dos de Treboles", "Tres de Treboles", "Cuatro de Treboles", "Cinco de Treboles", "Seis de Treboles", "Siete de Treboles", "Ocho de Treboles", "Nueve de Treboles", "J de Treboles", "Q de Treboles", "K de Treboles",
        "AS de Corazones", "Dos de Corazones", "Tres de Corazones", "Cuatro de Corazones", "Cinco de Corazones", "Seis de Corazones", "Siete de Corazones", "Ocho de Corazones", "Nueve de Corazones", "J de Corazones", "Q de Corazones", "K de Corazones"
    ];

    repartir();

    echo "Cartas del jugador: " . implode(", ", $jugador) . "\n";
    echo "Carta del crupier: " . $crupier[0] . "\n";

    pedir_pasar();
}

// Iniciar el juego
while (true) {
    jugar();
}

?>
