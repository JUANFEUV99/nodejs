const fs = require("fs");
const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", {
        base: {
            demand: true,
            alias: "b"
        }
    })
    .argv;

let cadena = "";
let base = argv.base;
let comando = argv._[0];

for (let i = 1; i <= 10; i++) {
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