const prompt = require("prompt-sync")();

let a = parseInt(prompt("Primer número: "));
let b = parseInt(prompt("Segundo número: "));

let sumaPares = 0;
let sumaImpares = 0;
let contImpares = 0;

for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (i % 2 == 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
        contImpares++;
    }
}

console.log("Suma de pares:", sumaPares);
console.log("Promedio impares:", sumaImpares / contImpares);
