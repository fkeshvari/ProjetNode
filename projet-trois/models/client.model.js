const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema ({
	
	nomEntreprise: String,
	adresse: String,
	contact: {
		nom: String,
		prenom: String,
		telephone: Number,
		mail: String
	},
	secteurActivite: String

});

module.exports = mongoose.model('client' , ClientSchema);