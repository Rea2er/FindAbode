const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/build/'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./backend/models/user.model');

app.use('/signup/emial', (req, res) => {
  res.send("Testing")
});
app.use('/signup', usersRouter);

//server port
app.listen(port, () => {
  console.log(`Server is runing on port: ${port}`);
});