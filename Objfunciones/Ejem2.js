const prompt =require("prompt-sync")()

const areaRectangulo = (Base,altura)=>{
    return base*altura
}

let base = prompt ("Ingrese base del rectangulo :")
let altura = prompt ("Ingrese la altura del rectangulo: ")

let area = areaRectangulo(base,altura)

console.log(`El area del rectangulo es: ${area}`)