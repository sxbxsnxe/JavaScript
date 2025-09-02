const prompt = require("prompt-sync")();

function menu() {
    let opcion = 0;
    do {
        console.clear(); // Limpia la pantalla
        console.log("Menu de opciones");
        console.log("1. Área del círculo");
        console.log("2. Adivinar número entre 1 y 10");
        console.log("3. Salir");
        console.log("");

        opcion = parseInt(prompt("Selecciona una opción: "));

        switch (opcion) {
            case 1:
                // Calcular área del círculo
                let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
                let area = Math.PI * Math.pow(radio, 2);
                console.log(`El área del círculo es: ${area.toFixed(2)}`);
                break;

            case 2:
                // Juego de adivinar número
                let numeroSecreto = Math.floor(Math.random() * 10) + 1;
                let intento = parseInt(prompt("Adivina un número entre 1 y 10: "));

                if (intento === numeroSecreto) {
                    console.log("¡Felicidades! Adivinaste el número.");
                } else {
                    console.log(`Lo siento, el número era ${numeroSecreto}.`);
                }
                break;

            case 3:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }

        prompt("Presione Enter para continuar...");
    } while (opcion !== 3);
}

menu();
