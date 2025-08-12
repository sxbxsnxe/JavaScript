const prompt = require("prompt-sync")();

let a = parseInt(prompt("Primer número: "));
let b = parseInt(prompt("Segundo número: "));

for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
