const Personne = require('../models/static/Personne');
const Adresse = require('../models/static/Adresse');
/*
class Personne {
    constructor(prenom,nom) {
        this.prenom = prenom;
        this.nom = nom;
        this.la = [];
    }
};
*/

let lp = [];
let la = [];

// traitement des requêtes internes
exports.creerPersonne = (req,res,next) => {
    lp.push(new Personne(prenom,nom));
    res.status(201).json({msg: ""});
};
