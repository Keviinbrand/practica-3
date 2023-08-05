let precioxHoraMoto = 2000;
let precioxHoraAuto = 5000;

let horas = prompt("Ingrese la cantidad de horas que va a dejar el vehículo");

let tipoVehiculo = prompt("Ingrese el tipo de vehículo: moto o auto");

if (tipoVehiculo == "moto") {
    alert("El precio a pagar es: " + Math.ceil((horas * precioxHoraMoto)));
} else if (tipoVehiculo == "auto") {
    alert("El precio a pagar es: " + Math.ceil((horas * precioxHoraAuto)));
}