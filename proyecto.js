let entrada = document.getElementById("entrada");
let salida = document.getElementById("salida");
let salidaSinDatos = document.getElementsByClassName("salida-sin-datos")[0];
let salidaConDatos = document.getElementsByClassName("salida-con-datos")[0];
let botonDeCopiar = document.getElementById("copiar");
let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
};

function encriptar() {
    if (entrada.innerText === "") {
        alert("Debes ingresar un texto para encriptar. Por favor, intenta de nuevo.");
        return;
    }
 // Encriptador de texto
 let text = entrada.innerText.toLowerCase(); // Usando la variable "entrada"
 let textoEncriptado = "";
 for (let lla of text){
     textoEncriptado += llaves[lla] || lla;
 }
 salida.innerText = textoEncriptado;
 // ocultamos el área de entrada sin datos y mostramos el área de entrada con datos y el boton copiar
 salidaSinDatos.style.display = "none";
 salidaConDatos.style.display = "block";
 botonDeCopiar.style.display = "block";
 return;
}

// desencriptador de texto
function desencriptar() {
    // Si el entrada esta vacio, mostramos un mensaje de alerta y salimos de la función.
    if (entrada.innerText === "") {
        alert("Debes ingresar un texto para desencriptar. Por favor intenta nuevamente.");
        return;
    }
    // Desencriptamos el texto
    let text = entrada.innerText.toLowerCase(); // Usando la variable  "entrada"
    let textoDesencriptado = text;
    for (let llave in llaves) {
        textoDesencriptado = textoDesencriptado.split(llaves[llave]).join(llave);
    }
    salida.innerText = textoDesencriptado; // Usando la variable "salida"
    // ocultamos el área de salida sin datos y mostramos el área de salida con datos y el boton copiar
    areaOutputSinDatos.style.display = "none";
    areaOutputConDatos.style.display = "block";
    botonCopiar.style.display = "block";
}

// copiar texto a portapapeles
function copiar() {
    if (salida.innerHTML === "") {
        alert("No hay texto a copiar");
        return;
    }
    // Verificar si el navegador admite el acceso al portapapeles
    if (navigator.clipboard) {
        // Intentar copiar al portapapeles
        navigator.clipboard.writeText(salida.innerText)
            .catch(err => {
                alert("Error al copiar texto al portapapeles. Intenta nuevamente o utiliza Ctrl+C");
            });
    } else {
        // Si el navegador no admite el acceso al portapapeles, indica al usuario que copie manualmente
        alert("su navegador no admite el acceso al portapapeles. Intenta nuevamente o utiliza Ctrl+C");
    }
}
// Evento para restablecer la pagina al dar clic en el logotipo
function restablecer() {
    entrada.innerHTML = "";
    salida.innerHTML = " Click en \"Enviar\" para comenzar.";
    salidaSinDatos.style.display = "flex";
    salidaConDatos.style.display = "none";
    botonDeCopiar.style.display = "none";
}
function patron(elemento) {
    let contenido = elemento.innerText;
    // Convertir el contenido a minúsculas y eliminar caracteres no deseados
    let nuevoContenido = contenido.toLowerCase().replace(/[áéíóú´]/g, '');
    elemento.innerText = nuevoContenido;

    let range = document.createRange();
    let sel = window.getSelection();
    range.setStart(elemento, elemento.childNodes.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

input.addEventListener('paste', function(event) {
    event.preventDefault();
    let text = event.clipboardData.getData('text/plain');
    // Convertir el texto pegado a minúsculas y eliminar caracteres no deseados
    text = text.toLowerCase().replace(/[áéíóú´]/g, '');
    input.innerText = text;
});


