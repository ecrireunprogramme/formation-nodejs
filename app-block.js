const fs = require('fs');

console.log('-> Début du programme');

const data = fs.readFileSync('./data/temp.txt', 'utf8');

console.log('Données chargées, taille =', data.length);

console.log('Instruction après la lecture');

console.log('<- Fin du programme');