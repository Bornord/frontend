const express = require('express');

// Création d'un routeur que l'on exportera au serveur
const router = express.Router();
// import du controleur métier
const auth = require('../middleware/auth');
const controller = require('../controllers/controller');

// traitement du routage

module.exports= router;