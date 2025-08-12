// escribir un sccript que diga si un numero es par o impar, recordemos que un umero es par si al dividirlo por 2 da como resto:0

const prompt = require ("prompt-sync")()

let num = prompt("Ingrese el numero: ")

if (num % 2 == 0) {
    console.log(`Su numero  es par`)
}else{
    console.log("Su numero es impar...")
}

