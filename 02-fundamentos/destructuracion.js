let kokun = {
    nombre: "Kakaroto",
    apellido: "Son",
    poder: "TODOS ALV!",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

let { nombre: primero, apellido, poder } = kokun

console.log(primero);