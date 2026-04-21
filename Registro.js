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