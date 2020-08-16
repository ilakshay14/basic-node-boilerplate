const express = require('express');
// const cors = require('cors');
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const DB_URL = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

const App = express();

App.use(bodyParse.json());
App.use(bodyParse.urlencoded({ extended: false }));

mongoose.connect(DB_URL, { useNewUrlParser: true}, () => {
    console.log(`Connected to Mongo DB`);
})

App.get('/', function (req, res) {
    res.send('hello world');
});

App.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
})