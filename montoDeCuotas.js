
let valorTotalCompra = parseFloat(prompt("Ingrese el valor total de la compra: "));


let formaPago1 = {
  cuotas: 1,
  recargo: 0,
  total: valorTotalCompra,
};

let formaPago2 = {
  cuotas: 2,
  recargo: valorTotalCompra * 0.05,
  total: valorTotalCompra * 1.05,
};

let formaPago3 = {
  cuotas: 6,
  recargo: valorTotalCompra * 0.4,
  total: valorTotalCompra * 1.4,
};

let formasDePago = [formaPago1, formaPago2, formaPago3];

let mensaje = "Posibles formas de pago:\n";
formasDePago.forEach((formaPago, index) => {
  mensaje += `Forma de pago ${index + 1}:\nCuotas: ${formaPago.cuotas}, Recargo: $${formaPago.recargo.toFixed(2)}, Total: $${formaPago.total.toFixed(2)}\n\n`;
});

alert(mensaje);

