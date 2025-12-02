const NACIONALIDADES_ACEPTADAS = [
    {key: 'AU', name: "Australia"},
    {key: 'BR', name: "Brasil"},
    {key: 'CA', name: "Canadá"},
    {key: 'CH', name: "Suiza"},
    {key: 'DE', name: "Alemania"},
    {key: 'DK', name: "Dinamarca"},
    {key: 'ES', name: "España"},
    {key: 'FI', name: "Finlandia"},
    {key: 'FR', name: "Francia"},
    {key: 'GB', name: "Reino Unido"},
    {key: 'IE', name: "Irlanda"},
    {key: 'IN', name: "India"},
    {key: 'IR', name: "Irán"},
    {key: 'MX', name: "México"},
    {key: 'NL', name: "Países Bajos"},
    {key: 'NO', name: "Noruega"},
    {key: 'NZ', name: "Nueva Zelanda"},
    {key: 'RS', name: "Serbia"},
    {key: 'TR', name: "Turquía"},
    {key: 'UA', name: "Ucrania"},
    {key: 'US', name: "Brasil"},
];

window.onload = function() {
    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");
    const labels = form[0].getElementsByTagName("label");

    const inputsText = form[0].getElementsByClassName("input-text");

    for(let input of inputs) {
        input.onfocus = resaltarDesresaltar;

        input.addEventListener("blur", resaltarDesresaltar);
    }

    for(let select of selects) {
        select.onfocus = resaltar;
        select.addEventListener("blur", noResaltar);
    }

    for(let label of labels) {
        label.onmouseover = cambiarColor;
        label.onmouseout = cambiarColor;
    }

    for(let input of inputsText) {
        input.addEventListener("blur", validarTexto);

    }

    llenarNacionalidad();
}

function llenarNacionalidad() {
    const nacionalidad = document.getElementById("nationality");

    for(let{key, name} of NACIONALIDADES_ACEPTADAS) {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

function resaltar(evento) {
    evento.target.classList.add("selected");
}

function noResaltar(evento) {
    const clase = evento.target.classList.contains("selected");
    if (clase) {
        evento.target.classList.remove("selected");
    }
}

function resaltarDesresaltar(evento) {
    evento.target.classList.toggle("selected");
}

function cambiarColor(evento) {
    const elemento = evento.target;
    if (elemento.style.color === "red") {
        elemento.style.color = "";
    } else {
        elemento.style.color = "red";
    }
}

function validarTexto(evento) {
    const elemento = evento.target;

    if (elemento.value.length === 0) {
        elemento.style.color = "red";
        elemento.value = "El campo no puede estar vacío";
        return;
    } else {
        elemento.style.color = "";
    }

    if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]/u.test(elemento.value)) {
        elemento.style.color = "red";
        elemento.value = "El campo no puede tener caracteres especiales"
        return;
    } else {
        elemento.style.color = "";
    }

    if (/\d/.test(elemento.value)) {
        elemento.style.color = "red";
        elemento.value = "El campo no puede tener numeros"
        return;
    } else {
        elemento.style.color = "";
    }
}