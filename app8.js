const fs = require('fs');

const sr = fs.createReadStream('./data/charge.txt', 'utf8');

sr.on('data', (chunk) => {
  fs.appendFile('./data/charge_copie.txt', chunk, 
    () => console.log('Ecriture dans le nouveau fichier'));
});

sr.on('close', () => console.log('fin de la lecture'));
sr.on('error', (err) => console.log('Une erreur est survenue', err));