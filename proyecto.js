const fs = require("fs");
const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", {
        base: {
            demand: true,
            alias: "b"
        },
        limit: {
            alias: "l",
            default: 8
        }
    })
    .command("crear", "Crea un archivo txt con la tabla de multiplicar", {
        base: {
            demand: true,
            alias: "b"
        },
        limit: {
            alias: "l",
            default: 8
        }
    })
    .argv;

let cadena = "";
let base = argv.base;
let comando = argv._[0];
let limit = argv.limit;

for (let i = 1; i <= limit; i++) {
    cadena += (`${base} * ${i} = ${base*i}\n`);
}

switch (comando) {
    case "listar":
        console.log(cadena);
        break;
    case "crear":
        fs.writeFile(`tabla${base}.txt`, cadena, err => {
            if (err) throw err;
            console.log(`El archivo tabla${base}.txt se creó`);
        });
        break;

    default:
        console.log("Comando no reconocido");
        break;
}