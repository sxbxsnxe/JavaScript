// Importar el módulo readline para leer datos desde la terminal
const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar el precio
rl.question("Ingrese el precio del producto ($): ", (precioInput) => {
  // Preguntar el IVA
    rl.question("Ingrese el IVA (%): ", (ivaInput) => {
    // Convertir las entradas a números
    let precio = parseFloat(precioInput);
    let iva = parseFloat(ivaInput);

    // Calcular el total
    let total = precio + (precio * iva / 100);

    // Mostrar el resultado
    console.log("El precio total a pagar es: $" + total.toFixed(2));

    // Cerrar la interfaz
    rl.close();
    });
});

