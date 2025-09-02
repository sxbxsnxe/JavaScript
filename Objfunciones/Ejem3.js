// objetos con funciones

let carro = {
    placa: "GAy123",
    marca: "Toyota",
    color: "Verde",
    encender: function(){
        return `el carro de placa ${this.placa} se ha encendido`
    }
}

console.log(carro.encender())
