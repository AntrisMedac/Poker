/*Al pulsar sobre el boton de inciar sesión en la pagina main la pagina se oscurecerá y pondrá borrosa
  y aparecerá el formulario de inicio de sesión*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón por su ID
    const button = document.getElementById('BtnIniciar');

    // Verificar si el botón existe en el DOM
    if (button) {
        // Llamar a la función borroso e inicio y pasar el botón
        mostrarInicio(button);

    } else {
        console.error('El botón con ID "BtnIniciar" no se encontró en el DOM');
    }
});

//Crea un div con un estilo borroso oscuro para no poder ver la pagina y muestra el inicio
function mostrarInicio(button) {
    // Agregar un evento click al botón
    button.addEventListener('click', function() {
        // Verificar si el div ya existe en el DOM
        let borroso = document.getElementById('borroso');
        if (!borroso) {
            // Crear el div para cambiar el estilo
            borroso = document.createElement('div');
            // Asignar un ID al div para poder referirnos a él
            borroso.id = 'borroso';
            // Insertar el div en el DOM
            document.body.appendChild(borroso);

            //Se crea el formulario de inicio de sesion
            const inicio = document.createElement('div');
            inicio.className = 'card w-25 inicio';
            inicio.innerHTML = `
                <form class="row g-2 p-3" method="POST" action="../PHP/login.php">
                    <div class="col-12">
                        <label for="userInput" class="form-label">Nombre de usuario</label>
                        <input type="text" name="nombre" class="form-control" id="userInput" required>
                    </div>
                
                    <div class="col-12">
                        <label for="passInput" class="form-label">Contraseña</label>
                        <input type="password" name="contraseña" class="form-control" id="passInput" required>
                    </div>

                    <?php
                        include(../PHP/conexion.php);
                        include(../PHP/login.php);
                    ?>
                
                    <div class="col-lg-5 col-sm-12">
                        <input type="checkbox" id="checkTerms" class="form-check-input">
                        <label for="checkTerms" class="form-check-label">Recordar contraseña</label>
                    </div>
                    
                    <div class="col-lg-7 col-sm-12">
                        <p>¿No tienes cuenta? <a href="register.php">Crear cuenta</a></p>
                    </div>
                
                    <div class="col-lg-9 col-sm-12">
                        <button type="submit" name="logear" class="btn btn-primary w-100">Iniciar Sesión</button>
                    </div>
                
                    <div class="col-lg-3 col-sm-12">
                        <button type="button" class="btn btn-danger w-100" onclick="history.back()">Volver</button>
                    </div>
                </form>
            `;
            
            //Se agrega al div nuevo 
            borroso.appendChild(inicio);
            inicio.style.display = 'block';

        }
        // Mostrar el div cambiando su propiedad display
        borroso.style.display = 'block';
    });
}

/*Al pulsar sobre el boton de Registrarse en la pagina main la pagina se oscurecerá y pondrá borrosa
  y aparecerá el formulario de registro*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón por su ID
    const button = document.getElementById('BtnRegistrarse');

    // Verificar si el botón existe en el DOM
    if (button) {
        // Llamar a la función borroso e inicio y pasar el botón
        mostrarRegistro(button);

    } else {
        console.error('El botón con ID "BtnRegistrarse" no se encontró en el DOM');
    }
});

//Crea un div con un estilo borroso oscuro para no poder ver la pagina y muestra el registro
function mostrarRegistro(button) {
    // Agregar un evento click al botón
    button.addEventListener('click', function() {
        // Verificar si el div ya existe en el DOM
        let borroso = document.getElementById('borroso');
        if (!borroso) {
            // Crear el div para cambiar el estilo
            borroso = document.createElement('div');
            // Asignar un ID al div para poder referirnos a él
            borroso.id = 'borroso';
            // Insertar el div en el DOM
            document.body.appendChild(borroso);

            //Se crea el formulario de registro
            const registro = document.createElement('div');
            registro.className = 'card w-50 registro';
            registro.innerHTML = `
                <form class="row g-2 p-3" method="post" action="../PHP/registrar.php">
                    <div class="col-12">
                        <label for="userInput" class="form-label">Nombre de usuario</label>
                        <input type="text" name="nombre" class="form-control" id="userInput" placeholder="@example">
                    </div>

                    <div class="col-12">
                        <label for="emailInput" class="form-label">Email</label>
                        <input type="email" name="email" class="form-control" id="emailInput" placeholder="example@example.com">
                    </div>

                    <div class="col-lg-6 col-sm-12">
                        <label for="passInput" class="form-label">Contraseña</label>
                        <input type="password" name="contraseña" class="form-control" id="passInput" placeholder="**********">
                    </div>

                    <div class="col-lg-6 col-12">
                        <label for="confirPassInput" class="form-label">Confirmar Contraseña</label>
                        <input type="password" name="confirmarContraseña" class="form-control" id="confirPassInput" placeholder="**********">
                    </div>

                    <div class="col-12">
                        <input type="checkbox" id="checkTerms" class="form-check-input">
                        <label for="checkTerms" class="form-check-label">
                            Acepto los 
                            <a href="https://youtu.be/dQw4w9WgXcQ?si=Man-EowZieY7LfDw" target="_blank">terminos y condiciones</a>
                        </label>
                    </div>

                    <div class="col-lg-5 col-sm-12">
                        <button type="submit" name="registrar" class="btn btn-primary w-100">Registrarse</button>
                    </div>

                    <div class="col-lg-4 col-sm-12">
                        <button type="reset" class="btn btn-dark w-100">Borrar</button>
                    </div>

                    <div class="col-lg-3 col-sm-12">
                        <button class="btn btn-danger w-100">Volver</button>
                    </div>
                </form>
            `;
            
            //Se agrega al div nuevo 
            borroso.appendChild(registro);
            registro.style.display = 'block';

        }
        // Mostrar el div cambiando su propiedad display
        borroso.style.display = 'block';
    });
}

/*Si al inciar sesion los datos son correctos se eliminaran los botones de iniciar sesion y registrarse para dar
  dar paso a mostrar la imagen de perfil, el nombre y un menú desplegable. Ocurrira los mismo al registrarse exitosamente*/
function mostrarPerfil(button){
    
}