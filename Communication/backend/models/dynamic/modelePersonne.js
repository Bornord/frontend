const mongoose =require('mongoose');
//const AdresseModele = require('./modeleAdresse');

class Adresse{
  constructor(rue){
      this.rue = rue
  }
};

const personneSchema = mongoose.Schema({
  prenom: {type: String, required: true},
  nom: {type: String, required: true},
  adresse: { type: Adresse, required: false },
});

module.exports = mongoose.model('personne', personneSchema);