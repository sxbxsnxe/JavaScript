const prompt = require('prompt-sync')();

let personas = parseInt(prompt("Ingrese el número de personas:"));
let gramosPapa = personas * 200;
let kilosPapa = gramosPapa / 1000;
let huevos = kilosPapa * 5;
let cebolla = kilosPapa * 300;
console.log("Papa: " + gramosPapa + " gramos");
console.log("Huevos: " + huevos + " unidades");
console.log("Cebolla: " + cebolla + " gramos");
