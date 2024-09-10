function ejecutarEj5() {
    let precio = parseFloat(prompt("Introduce el precio del artículo:"));
    let iva = 0.21;
    let precioConIva = precio * (1 + iva);

    alert("El IVA es: " + (precio * iva).toFixed(2));
    alert("El precio total con IVA es: " + precioConIva.toFixed(2));
}
