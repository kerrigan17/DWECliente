function ejecutarEj6() {
    let cadena = prompt("Introduce una cadena:");
    let longitud = cadena.length;
    let mayusculas = cadena.toUpperCase();
    let minusculas = cadena.toLowerCase();
    let palabras = cadena.split(" ");
    let palabrasReversa = palabras.slice().reverse();

    document.write("La longitud de la cadena es " + longitud + " caracteres<br>");
    document.write("La cadena en mayúsculas es " + mayusculas + "<br>");
    document.write("La cadena en minúsculas es " + minusculas + "<br>");
    document.write("CADENA NORMAL<br>");
    for (let palabra of palabras) {
        document.write(palabra + "<br>");
    }
    document.write("CADENA AL REVÉS<br>");
    for (let palabra of palabrasReversa) {
        document.write(palabra + "<br>");
    }
}
