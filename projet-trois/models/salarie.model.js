const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarieSchema = new Schema ({
	
	nom: String,
	prenom: String,
	username: String,
	birthday: Number,
	adresse: String,
	telephone: Number,
	mail: String,
	poste: String

});

module.exports = mongoose.model('salarie' , SalarieSchema);