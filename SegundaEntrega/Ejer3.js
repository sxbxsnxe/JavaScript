const prompt = require("prompt-sync")();

let edad = prompt("Digite su edad: ");
let cedula = prompt("¿Tiene cédula? (si/no): ");
let inscrita = prompt("¿La cédula está inscrita? (si/no): ");

if (edad >= 18 && cedula == "si" && inscrita == "si") {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}
