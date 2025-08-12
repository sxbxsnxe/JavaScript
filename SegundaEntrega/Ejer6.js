const prompt = require("prompt-sync")();

let salario = prompt("Digite su salario: ");
if (salario < 2000000) {
    console.log("No paga impuesto");
} else if (salario <= 5000000) {
    console.log("Debe pagar el 10% =", salario * 0.10);
} else {
    console.log("Debe pagar el 20% =", salario * 0.20);
}
