const express = require('express');
const routes = express.Router();

const PlanetsController = require('./controllers/PlanetsController');

routes.get('/planets', PlanetsController.index);
routes.get('/planets/:id', PlanetsController.show);
routes.post('/planets', PlanetsController.store);
routes.put('/planets/:id', PlanetsController.update);
routes.delete('/planets/:id', PlanetsController.destroy);

module.exports = routes;