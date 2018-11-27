const fs = require("fs");
const argv = require("yargs")
    .command("listar", "imprime en consola la tabla de multiplicar", {
        base: {
            demand: true,
            alias: "b"
        }
    })
    .argv;

let cadena = "";
let base = argv.base;

for (let i = 1; i <= 10; i++) {
    cadena += (`${base} * ${i} = ${base*i}\n`);
}

fs.writeFile(`tabla${base}.txt`, cadena, err => {
    if (err) throw err;
    console.log(`El archivo tabla${base}.txt se creó`);
});