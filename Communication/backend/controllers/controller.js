const Personne = require('../models/static/Personne');
const Adresse = require('../models/static/Adresse');

let lp = [];
let la = [];

// traitement des requêtes internes
exports.creerPersonne = (req,res,next) => {
    lp.push(new Personne(req.body.prenom,req.body.nom));
    res.status(201).json({msg: "le contact " + req.body.prenom + " " + req.body.nom + " a été créé avec succès"});
};

exports.afficher = (req,res,next) => {
    //console.log(JSON.stringify(lp));
    const fichier = JSON.stringify(lp);
    res.status(200).json(fichier);
};

exports.associer = (req,res,next) => {
    //console.log(JSON.stringify(lp));
    const fichierPersonne = JSON.stringify(lp);
    const fichierAdresse = JSON.stringify(la);
    res.status(200).json({personnes: fichierPersonne,adresses: fichierAdresse});
};

exports.creerAdresse = (req,res,next) => {
    la.push(new Adresse(req.body.adresse));
    //console.log(la[1].rue);
    res.status(201).json({msg: "l'adresse " + req.body.adresse + " a été créé avec succès"});
};

exports.validerChoix = (req,res,next) => {
    //console.log("début");
    //console.log(lp);
    const choixP= req.body.personne.split(' ');
    if ( choixP.length==2) {
        let resultat = true;
        const prenom = choixP[0];
        const nom =choixP[1];
        const choixA = req.body.adresse;
        lp.forEach( elementP => {
            //console.log("dans le forEach");
            //console.log(elementP.prenom == choixP[0]);
            if (prenom == elementP.prenom && nom == elementP.nom) {
                elementP.adresse.push(choixA);
                for (let i = 0; i < la.length; i++) {
                    if (la[i].rue == choixA) {
                        la.splice(i,1);
                    }
                }
                //console.log("dans le if");
                //console.log(la);
                //console.log(lp);
                if (resultat) {
                    res.status(200).json({msg: "L'association a été réalisé avec succès."});
                }
                resultat = false;
            } else {
                console.log("Un passage");
            }
        });
        if (resultat) {
            res.status(500).json({error: "le nom n'existe pas"});
        }
    } else {
        res.status(500).json({error: "longueur chelou"});
    }

}
