const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  price: String,
  availability: String,
  brand: String,
  category: String
}, 
{
  timestamps: true
}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;