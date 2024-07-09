<?php

include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["nombre"]) || empty($_POST["contraseña"])) {
        echo '<div class="alert alert-danger">Los campos están vacíos</div>';
    } else {
        $usuario = trim($_POST['nombre']);
        $contraseña = trim($_POST['contraseña']);

        $usuario = trim($_POST['nombre']);
        $contraseña = trim($_POST['contraseña']);

        $sql = $conexion->query("SELECT * FROM usuarios WHERE Nombre_Usuario = '$usuario' AND Contraseña = '$contraseña'");

        if($datos=$sql->fetch_object()){
            header("location:../HTML/index.html");
        }else{
            echo '<div class="alert alert-danger">"Aceso denegado"</div>';
        }
    }
} else {
    echo '<div class="alert alert-danger">Método no permitido</div>';
}
?>