const express = require('express');
const dotenv = require('dotenv');
const Posts = require('../database/Posts.js');
const User = require('../database/User.js');
const { signupValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var cors = require('cors');
// function to verify token in requests 
const verify = require('./verifyToken.js');
const app = express();
const PORT = 3001;
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'src')));
dotenv.config();

app.get('/posts', (req, res) => {
  Posts.find()
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => res.status(401).send(err));
})
// Posting
app.post('/posts', async (req, res) => {
  try {
    const Post = await Posts.create({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      availability: req.body.availability,
      brand: req.body.brand,
      category: req.body.category
    })
    res.send(Post)
  }
  catch (err) {
    console.error(err)
  }
})

//Validation Schema with Joi

// Testing user create
app.post('/signup', async (req, res) => {
  // Validate the data before we create a new user
  const { error } = signupValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Checking the email in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email exist');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  //else create the new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
});

// Login
app.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email or password not found');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Email or password is invalid');

  // create token 
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

  res.send('Logged in');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});