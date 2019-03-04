const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema ({
	
	nom: String,
	description: String,
	dateDebut: Number,
	dateFin: Number,
	prixProjet: Number,
	statut: String

});

module.exports = mongoose.model('projet' , ProjetSchema);