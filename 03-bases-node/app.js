const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).argv;

const fs = require("fs");


console.log(argv);

let comando = argv._[0];
let base = argv.base;
let data = "";

switch (comando) {
    case "listar":
        console.log("Listar");
        for (let i = 1; i <= parseInt(argv['limite']); i++) {
            data += (`${base} x ${i} = ${ base * i} \n `);
        }
        console.log(data);
        break;
    case "crear":
        console.log("Crear");
        for (let i = 1; i <= parseInt(argv['limite']); i++) {
            data += (`${base} x ${i} = ${ base * i} \n `);
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            console.log('Todo verD!');
        })
        break;

    default:
        console.log("Comando desconocido");
        break;
}