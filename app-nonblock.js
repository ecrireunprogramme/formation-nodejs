const fs = require('fs');

console.log('-> Début du programme');

fs.readFile('./data/temp.txt', 'utf8', (err, data) => {
  console.log('Données chargées, taille =', data.length);
});

console.log('Instruction après la lecture');

console.log('<- Fin du programme');