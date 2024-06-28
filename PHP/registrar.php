<?php
include("conexion.php");

if (isset($_POST["registrar"])) {
    $nombre = trim($_POST["nombre"]);
    $email = trim($_POST["email"]);
    $contraseña = trim($_POST["contraseña"]);

    if (strlen($nombre) > 0 && strlen($contraseña) > 0 && strlen($email) > 0) {
        $consulta = "INSERT INTO `usuarios`(`Nombre_Usuario`, `Contraseña`, `Email`) VALUES ('$nombre','$contraseña','$email')";
        $resultado = mysqli_query($conex, $consulta);

        if ($resultado) {
            echo "Registro correcto";
        } else {
            echo "Error en la consulta: " . mysqli_error($conex);
        }
    } else {
        echo "Por favor, complete todos los campos.";
    }
}
?>
