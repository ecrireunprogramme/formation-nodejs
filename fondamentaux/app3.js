const fs = require('fs');
const path = require('path');

const cheminFichier1 = path.join(__dirname, '/data/', 'fichier1.txt');
const cheminFichier2 = path.join(__dirname, '/data/', 'fichier2.txt');
const cheminFichier1Nouveau = path.join(__dirname, '/data/', 'fichier1-nouveau.txt');
const cheminFichier3 = path.join(__dirname, '/data/', 'fichier3.txt');

// fs.writeFile(cheminFichier, 'Hello world dans le fichier', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log('Fichier créé');
// });

// fs.appendFile(cheminFichier2, 'je suis le fichier 2', (err) => {
//   if (err) { console.log(err); return;}

//   console.log('Fichier 2 créé');
// });

// fs.open(cheminFichier3, 'w', (err) => {
//   if (err) { console.log(err); return;}

//   console.log('Fichier 3 créé');
// });

// fs.readFile(cheminFichier2, {'encoding': 'utf8'} , (err, data) => {
//   if (err) { console.log('Une erreur est survenue', err); return;}

//   console.log(data);
// });

// fs.appendFile(cheminFichier1, '\nJe suis la ligne suivante du fichier', (err) => { 
//   if (err) { console.log('Une erreur est survenue', err); return;}

//   console.log('Fichier mise à jour');
// });

// fs.writeFile(cheminFichier2, 'je suis le nouveau contenu du fichier', (err) => {
//   if (err) { console.log('Une erreur est survenue', err); return;}

//   console.log('Fichier mise à jour');
// })

// fs.rename(cheminFichier1, cheminFichier1Nouveau, (err) => {
//   if (err) { console.log('Une erreur est survenue', err); return;}

//   console.log('fichier renommé');
// });

fs.unlink(path.join(__dirname, '/data/', 'temporaire.txt'), (err) => {
  if (err) { console.log('Une erreur est survenue', err); return;}

  console.log('Fichier supprimé');
});