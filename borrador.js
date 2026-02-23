function comprueba() {
//Queremos que salga un mensaje de aviso pero no que se quede ahí de por vida
    let mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.style.display = "none";
        mensaje.textContent = "";
    }

//Validar los caracteres que ingresen en el nombre/apellido; teléfono; email
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s-]+$/;
    const regexT = /^\+?[1-9]\d{6,14}$/;
    const regexE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//Empezamos con las validaciones para que no haya campos vacios
    let error = false;

//Validar que el Nombre no quede vacio
    let nombre = document.getElementById("nombre");
    if (nombre.value == "" ||  !regex.test(nombre.value)) {
        nombre.style.borderColor = "red";
        document.getElementById("msn_nombre").innerText="El nombre no puede quedar vacío"
        error = true;
    }

//Validar el Apellido
    let apellido = document.getElementById("apellido");
    if (apellido.value == "" || !regex.test(apellido.value)) {
        apellido.style.borderColor = "red";
        document.getElementById("msn_apellido").innerText="El apellido no puede quedar vacío"
        error = true;
    }

//Validación nºTelefono
    let telefono = document.getElementById("telefono");
    if (telefono.value == "" || !regexT.test(telefono.value)) {
        telefono.style.borderColor = "red";
        document.getElementById("msn_telefono").innerText="El teléfono no puede quedar vacío"
        error = true;
    }

// Validar el Email
    let email = document.getElementById("email");
    if (email.value == "" || !regexE.test(email.value)) {
        email.style.borderColor = "red";
        document.getElementById("msn_email").innerText="El email no puede quedar vacío"
        error = true;
    }

//Validar opción (evento o sesión de fotos)
    let servicio = document.getElementById("servicio");
    if (servicio.value !== "sesión de estudio" && servicio.value !== "evento") {
        servicio.style.borderColor = "red";
        document.getElementById("msn_servicio").innerText="Servicio no válido"
        error = true;
    }

//Ahora - SI OPCIÓN ESTUDIO (pasa una cosa) - SI OPCIÓN EVENTO (pasa otra)

    //ESTUDIO
    //"Asegurarnos" de que es una sesión de estudio
    if (servicio.value === "sesión de estudio") {

        // Validar que El estudio no esté vacio
        let estudio = document.getElementById("miestudio");
        if (estudio && estudio.value !== "Galgi Manzanares el Real" && estudio.value !== "Galgi San Sebastian de los Reyes") {
            estudio.style.borderColor = "red";
            document.getElementById("msn_estudio").innerText="Estudio no válido";
            error = true;
        }

        // Validar el radioB de la Sesión Estudio
        let radioB = document.getElementsByName("servicio");
        let radioBSeleccionado = false;
        for (let i = 0; i < radioB.length; i++) {
            // Verificamos que sea tipo radio para no confundirlo con el input principal "servicio"
            if (radioB[i].type === "radio" && radioB[i].checked == true) {
                radioBSeleccionado = true;
            }
        }
        if (radioBSeleccionado == false) {
            document.getElementById("msn_radio").innerText="Servicio no seleccionado";
            error = true;
        }
    }




    //EVENTO
    //"Asegurarnos" de que es un evento
    if (servicio.value === "evento") {

        // Validar que radioB Evento no esté vacio
        let radioEvento = document.getElementsByName("evento");
        let radioEventoSelect = false;
        for (let i = 0; i < radioEvento.length; i++){
            if (radioEvento[i].checked == true) {
                radioEventoSelect = true;
            }
        }
        if (radioEventoSelect == false){
            document.getElementById("msn_radio").innerText="Servicio no seleccionado";
            error = true;
        }

        // Validar lugar evento
        let lugar = document.getElementById("lugar");
        if(lugar && lugar.value == "") {
            document.getElementById("msn_lugar").innerText="Es necesario marcar un lugar";
            error = true;
        }
    }

//Validar calendario
    let fecha = document.getElementById("fecha");
    const [a, m, d ] = fecha.value.split("-")
    const fechaFormat = new Date(a, m-1, d)
    const ahora = new Date()
    if (ahora.getTime() > fechaFormat.getTime()){
        fecha.style.borderColor = "red";
        document.getElementById("msn_fecha").innerText="Fecha no válida"
        error = true;
    }

//Validar checkbox
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkbox.length === 0) {
        checkbox.style.borderColor = "red";
        document.getElementById("msn_checkbox").innerText="Selecciona al menos una opción"
        error = true;
    }

    if (error){
        alert ("Revisar el formulario");
        return !error;
    }
    alert("El formulario será enviado");
}

/* ================= VALIDACIÓN LOGIN ================= */

  // Esperar a que el DOM cargue
  document.addEventListener("DOMContentLoaded", function () {

      // Capturar elementos
      const formulario = document.getElementById("formLogin");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      const errorEmail = document.getElementById("errorEmail");
      const errorPassword = document.getElementById("errorPassword");

      // Expresiones regulares
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

      /* ===== FUNCIONES VALIDACIÓN ===== */

      function validarEmail() {

          if (!regexEmail.test(email.value.trim())) {
              errorEmail.textContent = "Introduce un email válido.";
              email.classList.add("input-error");
              email.classList.remove("input-correcto");
              return false;
          } else {
              errorEmail.textContent = "";
              email.classList.remove("input-error");
              email.classList.add("input-correcto");
              return true;
          }
      }

      function validarPassword() {

          if (!regexPassword.test(password.value.trim())) {
              errorPassword.textContent =
              "Debe tener mínimo 8 caracteres, una mayúscula y un número.";
              password.classList.add("input-error");
              password.classList.remove("input-correcto");
              return false;
          } else {
              errorPassword.textContent = "";
              password.classList.remove("input-error");
              password.classList.add("input-correcto");
              return true;
          }
      }

      /* ===== EVENTOS ===== */

      // Evento 1 → input (tiempo real)
      email.addEventListener("input", validarEmail);
      password.addEventListener("input", validarPassword);

      // Evento 2 → blur
      email.addEventListener("blur", validarEmail);
      password.addEventListener("blur", validarPassword);

      // Evento 3 → focus (quita mensaje)
      email.addEventListener("focus", function () {
          errorEmail.textContent = "";
          email.classList.remove("input-error");
      });

      password.addEventListener("focus", function () {
          errorPassword.textContent = "";
          password.classList.remove("input-error");
      });

      // Evento 4 → submit
      formulario.addEventListener("submit", function (e) {

          e.preventDefault();

          const emailValido = validarEmail();
          const passwordValido = validarPassword();

          if (emailValido && passwordValido) {

              mostrarMensajeExito();

          }
      });

      /* ===== FUNCIÓN CON setTimeout ===== */

      function mostrarMensajeExito() {

          alert("Inicio de sesión con éxito");

          setTimeout(function () {
              formulario.reset();
              email.classList.remove("input-correcto");
              password.classList.remove("input-correcto");
          }, 3000);
      }

    });

function completa(){
//String templates//
let servicio = document.getElementById("servicio").value

const plantillaEvento = `<p>Evento que le gustaría contratar</p>
            <br>
            <input type="radio" id="eventosOpcionB" name="evento" value="1">Fotgrafía de bodas
            <br>
            <input type="radio" id="eventosOpcionE" name="evento" value="2">Eventos corporativos
            <br>
            <p id="msn_radio"></p>
            <br>

            <p>Lugar del evento</p>
            <select name="lugar" id="lugar" size="4" >
            <option value="1">Comunidad de Madrid</option>
            <option value="2">Castilla y León</option>
            <option value="3">Castilla La Mancha</option>
            <option value="4">La Rioja</option>
            <option value="5">Extremadura</option>
            <option value="6">Comunidad Valenciana</option>
            <option value="7">Murcia</option>
            <option value="8">Andalucía</option>
            <option value="9">Galicia</option>
            <option value="10">Cataluña</option>
            </select>
            <p id="msn_lugar"></p>

            <p>Especifique la localidad del evento</p>
            <textarea rows="2" cols="50" name="localidad" id="localidad"></textarea>
            <p id="msn_localidad"></p>
            <br></br>`

const plantillaSesion = `<p>Sesión de estudio que le gustaría contratar</p>
            <br>
            <input type="radio" id="servicioR" name="servicio" value="1">Retartos profesionales
            <br>
            <input type="radio" id="servicioF" name="servicio" value="2">Sesiones familiares
            <br>
            <p id="msn_radio"></p>

            <p>Seleccione el estudio que le gustaría visitar</p>
            <input list="estudios" id="miestudio" name="miestudio" placeholder="Seleccione uno de los siguientes estudios">
            <p id="msn_estudio"></p>
            <datalist id="estudios">
                <optgroup label="miestudio">
                    <option value="Galgi Manzanares el Real">
                    <option value="Galgi San Sebastian de los Reyes">
                </optgroup>
            </datalist>
            <br>`

    if (servicio === "evento") {
        document.getElementById("opcional").innerHTML = ""
        document.getElementById("opcional").innerHTML = plantillaEvento
    } else if (servicio === "sesión de estudio") {
        document.getElementById("opcional").innerHTML = ""
        document.getElementById("opcional").innerHTML = plantillaSesion
    } else {
        document.getElementById("opcional").innerHTML = ""
    }

}
