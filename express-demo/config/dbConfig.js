const mongoose = require('mongoose');

const connectMongoDb = async (uri) => {
  await mongoose.connect(uri)
          .then(() => console.log('Connecté à la base de données'))
          .catch(err => { 
            console.log('Erreur de connexion à la base de données.'); 
            throw err; 
          })
}

module.exports = connectMongoDb;