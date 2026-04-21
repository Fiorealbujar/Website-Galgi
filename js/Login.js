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

    email.addEventListener("input", validarEmail);
    password.addEventListener("input", validarPassword);

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        if (validarEmail() && validarPassword()) {

            alert("Inicio de sesión con éxito");

            setTimeout(() => {
                formulario.reset();
                email.classList.remove("input-correcto");
                password.classList.remove("input-correcto");
            }, 2000);
        }
    });

});