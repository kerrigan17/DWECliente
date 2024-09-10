function ejecutarEj1() {
    let suma = 0;
    let mayoresDeCien = 0;

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Introduce el número " + (i + 1) + " :"));
        suma += numero;
        if (numero > 100) {
            mayoresDeCien++;
        }
    }

    alert("La suma de los números es: " + suma);
    alert("Cantidad de números mayores de 100: " + mayoresDeCien);
}
