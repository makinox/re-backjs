const fs = require('fs');

fs.copyFile('os/naranja.txt', 'os/limon.txt', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('naranja.txt fue copiado como limon.txt');
});
