const express = require('express');

// Création d'un routeur que l'on exportera au serveur
const Router = express.Router();
const Controller = require('../controllers/controller');
// import du controleur métier
//const auth = require('../middleware/auth');
//const controller = require('../controllers/controller');

// traitement du routage
Router.post('/ajoutPersonne', Controller.creerPersonne);
Router.get('/listeP', Controller.afficher);
Router.get('/associer', Controller.associer);
Router.post('/ajoutAdresse', Controller.creerAdresse);

module.exports= Router;