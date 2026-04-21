function comprueba() {

    limpiarErrores();


    let mensaje = document.getElementById("mensaje"); 

    if (mensaje) {
        mensaje.style.display = "none"; 
        mensaje.textContent = "";
    }



    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s-]+$/;
    const regexT = /^[6789][0-9]{8}$/; 
    const regexE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;



    let error = false;



    let nombre = document.getElementById("nombre");

    if (nombre.value == "" || !regex.test(nombre.value)) {

        nombre.style.borderColor = "red";
        document.getElementById("msn_nombre").innerText =
            "El nombre no puede quedar vacío";

        error = true; 
    }



    let apellido = document.getElementById("apellido");

    if (apellido.value == "" || !regex.test(apellido.value)) {

        apellido.style.borderColor = "red";
        document.getElementById("msn_apellido").innerText =
            "El apellido no puede quedar vacío";

        error = true;
    } 



    let telefono = document.getElementById("telefono");

    if (telefono.value == "" || !regexT.test(telefono.value)) {

        telefono.style.borderColor = "red";
        document.getElementById("msn_telefono").innerText =
            "El teléfono no es válido";

        error = true;
    }



    let email = document.getElementById("email");

    if (email.value == "" || !regexE.test(email.value)) {

        email.style.borderColor = "red";
        document.getElementById("msn_email").innerText =
            "El email no es válido";

        error = true;
    }



    let servicio = document.getElementById("servicio");

    if (servicio.value !== "sesión de estudio" && servicio.value !== "evento") {

        servicio.style.borderColor = "red";
        document.getElementById("msn_servicio").innerText =
            "Servicio no válido";

        error = true;
    }



    if (servicio.value === "sesión de estudio") {
        

        let estudio = document.getElementById("miestudio");

        if (estudio && estudio.value == "") {

            estudio.style.borderColor = "red";
            document.getElementById("msn_estudio").innerText =
                "Estudio no válido";    

            error = true;
        }



        let radioB = document.getElementsByName("servicio");
        let radioBSeleccionado = false;

        for (let i = 0; i < radioB.length; i++) {

            if (radioB[i].type === "radio" && radioB[i].checked == true) {
                radioBSeleccionado = true;
            }
        }


        if (radioBSeleccionado == false) {

            document.getElementById("msn_radio").innerText =
                "Servicio no seleccionado";

            error = true;
        }
    }



    if (servicio.value === "evento") {
        

        let radioEvento = document.getElementsByName("evento");
        let radioEventoSelect = false; 

        for (let i = 0; i < radioEvento.length; i++){

            if (radioEvento[i].checked == true) {
                radioEventoSelect = true;
            }
        }


        if (radioEventoSelect == false){

            document.getElementById("msn_radio").innerText =
                "Servicio no seleccionado";

            error = true;
        }



        let lugar = document.getElementById("lugar"); 

        if(lugar && lugar.value == "") {

            document.getElementById("msn_lugar").innerText =
                "Es necesario marcar un lugar";

            error = true;
        }
    }



    let fecha = document.getElementById("fecha");

    if (fecha.value == "") {

        fecha.style.borderColor = "red";
        document.getElementById("msn_fecha").innerText =
            "Seleccione una fecha";

        error = true;

    } else {

        const partes = fecha.value.split("-");
        const fechaFormat = new Date(partes[0], partes[1]-1, partes[2]);
        const ahora = new Date();

        if (ahora.getTime() > fechaFormat.getTime()){

            fecha.style.borderColor = "red";
            document.getElementById("msn_fecha").innerText =
                "Fecha no válida";

            error = true;
        }
    }



    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkbox.length === 0) {

        document.getElementById("msn_checkbox").innerText =
            "Selecciona al menos una opción";    

        error = true;
    }



    if (error){

        alert("Revisar el formulario");
        return false;     
    } 


    alert("El formulario será enviado");
    return true;
}




function limpiarErrores(){

    let mensajes = document.querySelectorAll("p[id^='msn_']");

    for(let i = 0; i < mensajes.length; i++){

        mensajes[i].innerText = "";
    }


    let campos = document.querySelectorAll("input, textarea, select");

    for(let j = 0; j < campos.length; j++){

        campos[j].style.borderColor = "";
    }
}




function completa(){

    let servicio = document.getElementById("servicio").value;



    const plantillaEvento =

        "<p>Evento que le gustaría contratar</p>" +

        "<input type='radio' name='evento'> Fotografía de bodas " +
        "<input type='radio' name='evento'> Eventos corporativos " +

        "<p id='msn_radio'></p>" +

        "<p>Lugar del evento</p>" +

        "<select id='lugar'>" +

            "<option value=''>Seleccione</option>" +
            "<option>Comunidad de Madrid</option>" +
            "<option>Castilla y León</option>" +
            "<option>Andalucía</option>" +
            "<option>Galicia</option>" +

        "</select>" +

        "<p id='msn_lugar'></p>" +

        "<p>Especifique la localidad</p>" +

        "<textarea id='localidad' rows='2'></textarea>" +

        "<p id='msn_localidad'></p>";



    const plantillaSesion =

        "<p>Sesión de estudio que le gustaría contratar</p>" +

        "<input type='radio' name='servicio'> Retratos profesionales " +
        "<input type='radio' name='servicio'> Sesiones familiares " +

        "<p id='msn_radio'></p>" +

        "<p>Seleccione el estudio</p>" +

        "<input list='estudios' id='miestudio'>" +

        "<datalist id='estudios'>" +

            "<option value='Galgi Manzanares el Real'>" +
            "<option value='Galgi San Sebastian de los Reyes'>" +

        "</datalist>" +

        "<p id='msn_estudio'></p>";



    if (servicio === "evento") {

        document.getElementById("opcional").innerHTML = plantillaEvento;

    } else if (servicio === "sesión de estudio") {

        document.getElementById("opcional").innerHTML = plantillaSesion;

    } else {

        document.getElementById("opcional").innerHTML = "";
    }

}