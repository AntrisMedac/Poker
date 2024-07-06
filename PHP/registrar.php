<?php
include('conexion.php'); // Asegúrate de que este archivo incluya correctamente la conexión

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['registrar'])) {
    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];

    // Validar los datos
    if (empty($nombre) || empty($email) || empty($contraseña)) {
        die("Por favor, completa todos los campos.");
    }

    // Escapar caracteres especiales para evitar inyección SQL
    $nombre = $conexion->real_escape_string($nombre);
    $email = $conexion->real_escape_string($email);
    $contraseña = $conexion->real_escape_string($contraseña);

    // Encriptar la contraseña
    $hashed_password = password_hash($contraseña, PASSWORD_DEFAULT);

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO usuarios (`Nombre_Usuario`, `Contraseña`, `Email`) VALUES ($nombre, $hashed_password, $email)";

    if ($conexion->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $sql . "<br>" . $conexion->error;
    }

    // Cerrar la conexión
    $conexion->close();
}
?>
