let costeHotexDia = 700;
let costoComidaxDia = 500;

let diasDeViaje = parseInt(prompt("Ingrese la cantidad de días que durará su viaje"));

let costoPorComida = costoComidaxDia * diasDeViaje;
let costoPorHospedaje = costeHotexDia * diasDeViaje;
let otrosGastos = diasDeViaje * 200;

let montoDeCheque = costoPorComida + costoPorHospedaje + otrosGastos;

alert("El monto del cheque es: " + montoDeCheque);