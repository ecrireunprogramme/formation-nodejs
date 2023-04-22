const express = require('express');
const postRoutes = require('./routes/postRoutes');
const logger = require('./middlewares/logger');

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

app.use('/posts', postRoutes);

app.listen(port, 
    () => console.log('En écoute sur le port', port));
