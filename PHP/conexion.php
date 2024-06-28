<?php

$server = "localhost";
$user = "root";
$pass = "";
$db = "mypoker-test";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
    die("Conexión fallida" . $conexion->connect_error);
}
else {
    echo "Conexión exitosa";
}