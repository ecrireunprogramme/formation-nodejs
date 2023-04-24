const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { 
    type: String,
    minLength: [3, 'La valeur minimale requise est 3'],
    maxLength: 254
  },
  content: { 
    type: String,
    minLength: [100, 'La valeur minimale requise est 100'],
    maxLength: 1000
  },
  author: { 
    type: String,
    minLength: [3, 'La valeur minimale requise est 3'],
    maxLength: 100
  },
  date: { type: Date, default: Date.now }
});

const PostModel = new mongoose.model('posts', postSchema);

module.exports = PostModel;