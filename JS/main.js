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

//Crea un div con un estilo borroso oscuro para no poder ver la pagina y muestra el inicio
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

            //Se crea el formulario de inicio de sesion
            const inicio = document.createElement('form');
            inicio.setAttribute('action', '#');
            inicio.id = 'inicio';
            inicio.innerHTML = `
                <form class="row g-3" registro>
                    <div class="col-md-4">
                        <label for="validationDefault01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Username</label>
                        <div class="input-group">
                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationDefault03" class="form-label">City</label>
                        <input type="text" class="form-control" id="validationDefault03" required>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault04" class="form-label">State</label>
                        <select class="form-select" id="validationDefault04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="validationDefault05" required>
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
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
