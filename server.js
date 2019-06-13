const express = require('express');
const mongoose = require('mongoose');

// iniciando o App
const app = express();

// iniciando o DB
mongoose.connect('mongodb+srv://indemberge:859621e@cursonodejs-rtjkg.mongodb.net/test?retryWrites=true',{
useNewUrlParser: true
});

app.get('/', (get, res) => {
    res.send("Hello Planets");
});

app.listen(3001);