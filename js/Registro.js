function validarRegistro() {

    limpiarErrores();

    var hayError = false;

    var campoNombre = document.getElementById("reg_nombre");
    var campoApellido = document.getElementById("reg_apellido");
    var campoEmail = document.getElementById("reg_email");
    var campoTelefono = document.getElementById("reg_telefono");
    var campoUsuario = document.getElementById("reg_usuario");
    var campoContrasena = document.getElementById("reg_pass");
    var campoContrasena2 = document.getElementById("reg_pass2");
    var checkboxCondiciones = document.getElementById("condiciones");

    var expresionTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    var expresionTelefono = /^[6789][0-9]{8}$/;
    var expresionEmail = /^[^@]+@[^@]+\.[a-z]{2,}$/i;


    if (campoNombre.value.trim() === "" || !expresionTexto.test(campoNombre.value)) {
        mostrarError("err_nombre", "Nombre no válido", campoNombre);
        hayError = true;
    }


    if (campoApellido.value.trim() === "" || !expresionTexto.test(campoApellido.value)) {
        mostrarError("err_apellido", "Apellido no válido", campoApellido);
        hayError = true;
    }


    if (!expresionEmail.test(campoEmail.value)) {
        mostrarError("err_email", "Email incorrecto", campoEmail);
        hayError = true;
    }


    if (!expresionTelefono.test(campoTelefono.value)) {
        mostrarError("err_telefono", "Teléfono incorrecto", campoTelefono);
        hayError = true;
    }


    if (campoUsuario.value.length < 4) {
        mostrarError("err_usuario", "Mínimo 4 caracteres", campoUsuario);
        hayError = true;
    }


    if (campoContrasena.value.length < 6) {
        mostrarError("err_pass", "Mínimo 6 caracteres", campoContrasena);
        hayError = true;
    }


    if (campoContrasena.value !== campoContrasena2.value) {
        mostrarError("err_pass2", "No coinciden", campoContrasena2);
        hayError = true;
    }


    if (!checkboxCondiciones.checked) {
        document.getElementById("err_condiciones").innerText =
            "Debe aceptar las condiciones";
        hayError = true;
    }


    if (hayError) {
        alert("Revise el formulario");
        return false;
    }


    alert("Registro completado correctamente");
    return true;
}




function mostrarError(id, mensaje, campo) {

    document.getElementById(id).innerText = mensaje;
    campo.style.border = "2px solid red";
}




function limpiarErrores() {

    var mensajesError = document.querySelectorAll(".mensaje-error");

    for (var i = 0; i < mensajesError.length; i++) {
        mensajesError[i].innerText = "";
    }


    var campos = document.querySelectorAll("input");

    for (var j = 0; j < campos.length; j++) {
        campos[j].style.border = "";
    }
}


/*LOGIN*/

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formLogin");

    if (!formulario) return;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const errorEmail = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPassword");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    function validarEmail() {
        if (!regexEmail.test(email.value.trim())) {
            errorEmail.textContent = "Introduce un email válido.";
            email.classList.add("input-error");
            email.classList.remove("input-correcto");
            return false;
        }
        errorEmail.textContent = "";
        email.classList.remove("input-error");
        email.classList.add("input-correcto");
        return true;
    }

    function validarPassword() {
        if (!regexPassword.test(password.value.trim())) {
            errorPassword.textContent =
                "Debe tener mínimo 8 caracteres, una mayúscula y un número.";
            password.classList.add("input-error");
            password.classList.remove("input-correcto");
            return false;
        }
        errorPassword.textContent = "";
        password.classList.remove("input-error");
        password.classList.add("input-correcto");
        return true;
    }

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailOk = validarEmail();
        const passOk = validarPassword();

        if (emailOk && passOk) {

        }
    });

});