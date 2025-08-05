const prompt = require('prompt-sync')();

let horas = parseInt(prompt("Ingrese la cantidad de horas:"));
let minutos = parseInt(prompt("Ingrese la cantidad de minutos:"));
let totalSegundos = (horas * 3600) + (minutos * 60);
console.log("El total de segundos es: " + totalSegundos);
