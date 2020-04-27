let empleados = [{
    id: 1,
    nombre: "Empleado 1"
}, {
    id: 2,
    nombre: "Empleado 2"
}, {
    id: 3,
    nombre: "Empleado 3"
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 999097
}];


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(` :C No existe usuario ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}


let getSalario = (id, callback) => {
    let salarioDB = salarios.find(salario => salario.id === id);
    if (!salarioDB) {
        callback(`No existe el salario para ${id}`);
    } else {
        return callback(null, salarioDB)
    }
}


getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log([empleado.nombre, getSalario(empleado.id, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        return salario.salario;
    })]);
});