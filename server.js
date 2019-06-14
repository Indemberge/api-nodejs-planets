const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o DB
mongoose.connect('mongodb+srv://indemberge:859621e@cursonodejs-rtjkg.mongodb.net/test?retryWrites=true',{
useNewUrlParser: true
});

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);