const mongoose =require('mongoose');


const adresseSchema = mongoose.Schema({
  rue: { type: String, required: true },
});

module.exports = mongoose.model('adresse', adresseSchema);