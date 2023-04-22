const express = require('express');
const data = require('../data/posts.json');
const logger = require('../middlewares/logger');

const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
  res.render('posts/index', { posts: data });
});

router.get('/new', (req, res) => {
  res.render('posts/new');
});

router.get('/:id', (req, res) => {
  const idPost = req.params.id;
  const post = data.find(p => p.id == idPost);

  res.render('posts/details', {post});
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { title , content, author } = req.body;
  const id = Math.floor(Math.random() * 1000);

  data.push({id , title, content, author});

  res.redirect('/posts');
});

module.exports = router;