const Personne = require('../models/static/Personne');
const Adresse = require('../models/static/Adresse');

let lp = [];
let la = [];

// traitement des requêtes internes
exports.creerPersonne = (req,res,next) => {
    lp.push(new Personne(req.body.prenom,req.body.nom));
    res.status(201).json({msg: ""});
};

exports.afficher = (req,res,next) => {
    console.log(JSON.stringify(lp));
    const fichier = JSON.stringify(lp);
    res.status(200).json(fichier);
};

exports.associer = (req,res,next) => {
    console.log(JSON.stringify(lp));
    const fichierPersonne = JSON.stringify(lp);
    const fichierAdresse = JSON.stringify(la);
    res.status(200).json({personnes: fichierPersonne,adresses: fichierAdresse});
};

exports.creerAdresse = (req,res,next) => {
    la.push(new Adresse(req.body.adresse));
    //console.log(la[1].rue);
    res.status(201).json({msg: ""});
};
