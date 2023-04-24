const express = require('express');
require('dotenv').config();
const postRoutes = require('./routes/postRoutes');
const logger = require('./middlewares/logger');
const connectMongoDb = require('./config/dbConfig');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
//app.use(logger);
//app.set('views', path.join(__dirname, 'views'));

const port = 5000;

app.get('/', (req, res) => {
  const name = 'Darius Tsafack';

  res.render('index', { nomUtilisateur: name });
});

app.get('/notfound', (req, res) => {
  res.render('notfound');
});

app.use('/posts', postRoutes);

const startup = async () => {
  try { 
    await connectMongoDb(process.env.MONGO_URI);

    app.listen(port, 
      () => console.log('En écoute sur le port', port));
  } catch (err) {
    console.log('Une erreur est survenue', err);
    throw err;
  }
}

startup();


