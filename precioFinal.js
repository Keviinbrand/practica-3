let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
let iva = precioProducto * 0.15;
let descuento = precioProducto * 0.20;

let precioConIva = precioProducto + iva;
let precioFinal = precioConIva - descuento;
precioFinal = precioFinal;
alert("El precio final es: " + precioFinal);