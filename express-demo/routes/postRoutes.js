const express = require('express');
const logger = require('../middlewares/logger');
const PostModel = require('../models/postModel');

const router = express.Router();

router.use(logger);

router.get('/', async (req, res) => {
  const posts = await PostModel.find({});

  res.render('posts/index', { posts });
});

router.get('/new', (req, res) => {
  res.render('posts/new', { errors: [], post: {} });
});

router.get('/:id', async (req, res) => {
  res.render('posts/details', { post: req.post });
});

router.post('/', async (req, res) => {
  const { title, content, author } = req.body;

  const post = new PostModel({ title, content, author });

  const error = post.validateSync();

  if (error) {
    return res.render('posts/new', { post: req.body, errors: error.errors });
  }

  await post.save()
          .then(() => console.log('Post enregistré'))
          .catch((err) => console.log('Erreur de création du post', err));

  res.redirect('/posts');
});

router.get('/edit/:id', async (req, res) => {
  res.render('posts/edit', { post: req.post });
});

router.post('/edit/:id', async (req, res) => {
  const post = req.post;

  post.title = req.body.title;
  post.content = req.body.content;
  post.author = req.body.author;

  await post.save();

  res.redirect(`/posts/${post._id}`);
});

router.param(':id', async (req, res, next, id) => {
  const post = await PostModel.findById(id);

  if (!post) {
    return res.redirect('/notfound');
  }

  req.post = post;

  next();
});

router.get('/delete/:id', (req, res) => {
  res.render('posts/delete', { post: req.post });
});

router.post('/delete/:id', async (req, res) => {
  await PostModel.deleteOne({ _id: req.post._id });

  res.redirect('/posts');
});

module.exports = router;