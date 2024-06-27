/*Al pulsar sobre el boton de inciar sesión en la pagina main la pagina se oscurecerá y pondrá borrosa
  y aparecerá el formulario de inicio de sesión*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón por su ID
    const button = document.getElementById('BtnInciar');

    // Verificar si el botón existe en el DOM
    if (button) {
        // Llamar a la función borroso e inicio y pasar el botón
        mostrarInicio(button);

    } else {
        console.error('El botón con ID "BtnInciar" no se encontró en el DOM');
    }
});

//Crea un div con un estilo borroso oscuro para no poder ver la pagina
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
            const inicio = document.createElement('form');
            inicio.setAttribute('action', '#');
            inicio.id = 'inicio';
            inicio.innerHTML = `
                <h2>Inicio de sesión</h2>
                <div class="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required>
                    <label for="password">Contraseña</label>
                </div>
                <div class="forget">
                    <label for="checkbox"><input type="checkbox">Recordar Contraseña <a href="#">¿Olvidó la contraseña?</a></label>
                </div>
                <button><span style="color: rgb(255, 255, 255)">Iniciar sesión</span></button>
                <div class="register">
                    <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
                </div>
            `;
            
            //Se agrega al div nuevo 
            borroso.appendChild(inicio);

        }
        // Mostrar el div cambiando su propiedad display
        borroso.style.display = 'block';
    });
}

//Formulario de inicio de sesión
function (button) {
    let divInicio = document.getElementById('divInicio');
    if (!divInicio) {

        const inicio = document.createElement('form');
        inicio.setAttribute('action', '#');
        inicio.id = 'inicio';
        inicio.innerHTML = `
            <h2>Inicio de sesión</h2>
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required>
                <label for="email">Email</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required>
                <label for="password">Contraseña</label>
            </div>
            <div class="forget">
                <label for="checkbox"><input type="checkbox">Recordar Contraseña <a href="#">¿Olvidó la contraseña?</a></label>
            </div>
            <button><span style="color: rgb(255, 255, 255)">Iniciar sesión</span></button>
            <div class="register">
                <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
            </div>
        `;
        divInicio.appendChild(inicio);
        document.body.appendChild(divInicio);
    }
    inicio.style.display = 'block';
}