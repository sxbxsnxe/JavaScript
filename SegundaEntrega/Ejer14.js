const prompt = require("prompt-sync")();

let filas = prompt("Número de filas: ");
for (let i = 1; i <= filas; i++) {
    console.log("*".repeat(i));
}
