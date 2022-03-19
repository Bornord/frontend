const express = require('express');

// Création d'un routeur que l'on exportera au serveur
const Router = express.Router();
// Choisir la version statique (solution AdHoc) ou dynamique (MongoDB)
const Controller = require('../controllers/controller');
//const Controller = require('../controllers/DBcontroller');

// import du controleur d'identification
//const auth = require('../middleware/auth');

// traitement du routage
Router.post('/ajoutPersonne', Controller.creerPersonne);
Router.get('/listeP', Controller.afficher);
Router.get('/associer', Controller.associer);
Router.post('/ajoutAdresse', Controller.creerAdresse);
Router.post('/validerChoix', Controller.validerChoix);

module.exports= Router;