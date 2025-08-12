const prompt = require("prompt-sync")();

let num = prompt("Digite un número: ");
let primo = true;

if (num <= 1) {
    primo = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
        }
    }
}

if (primo) console.log("Es primo");
else console.log("No es primo");
