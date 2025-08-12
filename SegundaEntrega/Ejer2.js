// Escribir un script que lea un numero entero y al final muestre la suma de sus digitos

const prompt = require("prompt-sync")();

let num = prompt("Digite un número: ");
let suma = 0;
for (let i = 0; i < num.length; i++) {
    suma += parseInt(num[i]);
}
console.log("La suma de los dígitos es:", suma);
