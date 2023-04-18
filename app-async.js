let utilisateur;

const chargerUtilisateur = () => {
  setTimeout(() => {
    utilisateur = {'id': 101, 'nom': 'Tsafack', 'prenom': 'Darius'};

    console.log('Chargment terminé');
  }, 2000)
}

const afficherUtilisateur = () => {
  console.log('Utilisateur = ', utilisateur);
}

console.log('-> Début du programme');

// charger utilisateur
chargerUtilisateur();

// afficher utilisateur
afficherUtilisateur();

console.log('<- Fin du programme');