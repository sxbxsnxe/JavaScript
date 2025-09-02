let persona = {
    nombre: "Carlos",
    edad: 30,
    profesion : "ingeniero"
}

console.log (typeof(persona))
console.log(persona)

persona.email = "sebasgarces@gmail.com"
console.log(persona)

persona.edad = 30
console.log(persona)

function saludar (nombre){
    return `hola ${nombre}`
}
const result = saludar ("Sebas")
console.log(result)

const despedir = function (nombre){
    return `Adios ${nombre}`

}

console.log(despedir("Sebas"))

// function flecha 

const multiplicar = (a,b)=>a*b

console.log(multiplicar(5,9))//45

const mesaje  = ()=>{
    let saludo = "Hola a todos"
    console.log(saludo)
}

mesaje()