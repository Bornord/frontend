const express = require('express');

// Création d'un routeur que l'on exportera au serveur
const Router = express.Router();
// Choisir la version statique (solution AdHoc) ou dynamique (MongoDB)
const Controller = require('../controllers/Controller');
//const DBcontroller = require('../controllers/DBexample');
const DBController = require('../controllers/DBcontroller');
const UserController = require('../controllers/UserController');

// import du controleur d'identification
const auth = require('../middlewares/auth');

// traitement du routage
Router.post('/ajoutPersonne', Controller.creerPersonne);
Router.get('/listeP', Controller.afficher);
Router.get('/associer', Controller.associer);
Router.post('/ajoutAdresse', Controller.creerAdresse);
Router.post('/validerChoix', Controller.validerChoix);

// Procédure d'authenfication
Router.post('signup', UserController.signup)
Router.post('login',UserController.login);

// test avec DB
Router.post('/testSQL', auth, DBController.testSQL);
Router.get('/afficher', auth, DBController.afficher);
Router.post('/ajoutP', auth, DBController.ajoutP);
Router.post('/effacer', auth, DBController.effacer);

module.exports= Router;