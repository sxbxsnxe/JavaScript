const prompt = require("prompt-sync")();

let veces = prompt("Número entre 1 y 20: ");
let frase = prompt("Escriba una frase: ");

for (let i = 0; i < veces; i++) {
    console.log(frase);
}
