const Projet = require("../models/projet.model.js")


exports.createProjet = (req, res) => {
	let projet = new Projet(
	{
		
		nom: req.body.nom,
		description: req.body.description,
		dateDebut: req.body.dateDebut,
		dateFin: req.body.dateFin,
		prixProjet: req.body.prixProjet,
		statut: req.body.statut,
	}

);
	projet.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Projet created")
		}

		res.send(projet);
	})
}


exports.editProjet =  (req, res) => {
	Projet.findByIdAndUpdate(red.params.id,req.body, function (err, projet) {
		if(err){
			console.log(err);
		}
		else{
			console.log('updated')
		}
		res.send(projet);
	})
}

exports.listProjet = function (req, res){
	Projet.find(function(err , projet) {
		if(err) {console.log(err)} ;
		res.send(projet);
	})
};


exports.deleteProjet = function(req, res){
	projet.findByIdAndRemove(req.params.id, function (err){
		if(err) return(err);
		res.send('Deleted successfully!');
	})
};


exports.oneProjet = (req, res) => {
	Projet.findById(req.params.id, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send(projet);
	})
}
