const fs = require("fs");

let base = 8;
let cadena = "";

for (let i = 1; i <= 10; i++) {
    cadena += (`${base} * ${i} = ${base*i}\n`);
}

fs.writeFile(`tabla${base}.txt`, cadena, err => {
    if (err) throw err;
    console.log(`El archivo tabla${base}.txt se creó`);
});