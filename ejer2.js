const prompt = require('prompt-sync')();

let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
let area = lado * lado;
let perimetro = lado * 4;
console.log("Área del cuadrado: " + area);
console.log("Perímetro del cuadrado: " + perimetro);
