const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {

        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca cómo completada o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarea', {

        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'borra la tarea por hacer'
        }
    }).help().argv;

module.exports = {
    argv
}