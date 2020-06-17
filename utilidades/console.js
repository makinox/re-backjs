const fs = require('fs');

const out = fs.createWriteStream('./utilidades/out.log');
const err = fs.createWriteStream('./utilidades/err.log');

const consoleFile = new console.Console(out, err);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error('Ooops!'));
}, 2000);
