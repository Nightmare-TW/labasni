const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/labasni';

mongoose.connect(mongoUri, { useMongoClient: true }, () => {
  console.log('db connected');
});
const db = mongoose.connection;

module.exports = db;