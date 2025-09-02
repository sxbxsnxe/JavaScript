let Cuenta = {
    titular: "El mono jojoy",
    Saldo: "1.500.000",
    mostrarSaldo: function(){
        return `El saldo de la cuenta de ${this.titular} tiene el saldo : ${this.Saldo} `
    }
}

console.log(Cuenta.mostrarSaldo())