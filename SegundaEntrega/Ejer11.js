const prompt = require("prompt-sync")();

let num = prompt("Digite un número: ");
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("El factorial es:", factorial);
