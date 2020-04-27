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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(` :C No existe usuario ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });


}


getEmpleado(12).then(empleado => {
    console.log('empleado de DB', empleado);
}), (err) => {
    console.log(err);
};