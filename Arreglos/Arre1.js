// Arreglo
let frutas = ["manzana, pera, kiwi"]
console.log(frutas[0])
console.log(frutas.length)
frutas.push("Banano")

console.log(frutas)

for(fruta in frutas){
    console.log(fruta)
}

frutas.forEach(fruta =>{
    console.log(fruta)
})

let numeros = []
numeros.push(5)
numeros.push(10)
numeros.unshift(7)
console.log(numeros)
numeros.push(89)
numeros.push(20)
console.log(numeros)



for (let i = 0; i < numeros.length;i++ ){
    console.log(`numero ${numeros} en la posicion ${i}`)
}

let valores = [1,2,3,4,5,6,7,8,9]
let cuadrados = valores.map(x=>x*x)
console.log(cuadrados)





