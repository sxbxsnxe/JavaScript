const prompt = require("prompt-sync")();

let dia = prompt("Digite un número del 1 al 7: ");
if (dia == 1) console.log("Lunes");
else if (dia == 2) console.log("Martes");
else if (dia == 3) console.log("Miércoles");
else if (dia == 4) console.log("Jueves");
else if (dia == 5) console.log("Viernes");
else if (dia == 6) console.log("Sábado");
else if (dia == 7) console.log("Domingo");
else console.log("Número fuera de rango");
