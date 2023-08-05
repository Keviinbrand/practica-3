let examen1 = parseInt(prompt("Ingrese la nota del primer examen"));
let examen2 = parseInt(prompt("Ingrese la nota del segundo examen"));
let examen3 = parseInt(prompt("Ingrese la nota del tercer examen"));

let promedioPonderado = (examen1 * 0.25) + (examen2 * 0.25) + (examen3 * 0.50);

alert("El promedio ponderado es: " + promedioPonderado);