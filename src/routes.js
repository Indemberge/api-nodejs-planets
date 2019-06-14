const express = require('express');
const routes = express.Router();

const PlanetsController = require('./controllers/PlanetsController');

routes.get('/planets', PlanetsController.index);

module.exports = routes;