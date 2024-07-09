<?php
include('conexion.php'); // Asegúrate de que este archivo incluya correctamente la conexión

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['registrar'])) {
    // Recoger los datos del formulario
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $contraseña = trim($_POST['contraseña']);
    $confirmarContraseña = trim($_POST['confirmarContraseña']);

    // Validar los datos
    if (empty($nombre) || empty($email) || empty($contraseña) || empty($confirmarContraseña)) {
        die("Por favor, completa todos los campos.");
    }

    // Verificar que las contraseñas coincidan
    if ($contraseña !== $confirmarContraseña) {
        die("Las contraseñas no coinciden.");
    } else{
        // Insertar los datos en la base de datos
        $sql = "INSERT INTO usuarios (Nombre_Usuario, Contraseña, Email) VALUES ('$nombre', '$contraseña', '$email')";
    }

    // Escapar caracteres especiales para evitar inyección SQL
    $nombre = $conexion->real_escape_string($nombre);
    $email = $conexion->real_escape_string($email);

    if ($conexion->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $sql . "<br>" . $conexion->error;
    }

    // Cerrar la conexión
    $conexion->close();
}
?>
