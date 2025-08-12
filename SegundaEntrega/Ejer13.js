const prompt = require("prompt-sync")();

let num = prompt("Digite un número decimal: ");
console.log("En binario es:", Number(num).toString(2));
