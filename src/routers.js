const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routers = express.Router();
//Login
routers.post('/sessions', SessionController.create);

//Ongs
routers.get('/ongs', OngController.index);
routers.post('/ongs', OngController.create);

//Profile
routers.get('/profile', ProfileController.index);

//Incidents
routers.get('/incidents', IncidentController.index);
routers.post('/incidents', IncidentController.create);
routers.delete('/incidents/:id', IncidentController.delete);

module.exports = routers;