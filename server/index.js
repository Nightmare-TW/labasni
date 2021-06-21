const express = require('express');

const Posts = require('../database/Posts.js');

const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'src')));









app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });