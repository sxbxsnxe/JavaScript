const prompt = require("prompt-sync")();

let edad = prompt("Digite su edad: ");
if (edad < 5) {
    console.log("Entra gratis");
} else if (edad <= 18) {
    console.log("Paga $5000");
} else {
    console.log("Paga $10000");
}
