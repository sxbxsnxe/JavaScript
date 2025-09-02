const prompt = require("prompt-sync")();
function menu(){
    let opcion = 0
    do {
        console.clear()
        console.log("Menu de opciones")
        console.log("1. area del circuo")
        console.log("2. adivinar numero 1 y 10")
        console.log("3. Salir")
        console.log("")
        opcion = parseInt(prompt("Selecciona una opcion: "))
        switch (opcion){
            case 1:
                console.log("opcion 1")

                break
            case 2:
                console.log("opcion 2")

                break
            
            case 3: 
            console.log("opcion 3")

            break
        }
        prompt("presione enter para continuar...")
    } while (opcion !==3);
}

menu()