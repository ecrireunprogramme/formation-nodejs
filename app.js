const fs = require('fs');

const sr = fs.createReadStream('./data/charge.txt', 'utf8');
const sw = fs.createWriteStream('./data/charge_copie_3.txt');

sr.pipe(sw);