const Salarie = require("../models/salarie.model.js")


exports.createSalarie = (req, res) => {
	let salarie = new Salarie(
	{
		
		nom: req.body.nom,
		prenom: req.body.prenom,
		username: req.body.username,
		birthday: req.body.birthday,
		adresse: req.body.adresse,
		telephone: req.body.telephone,
		mail: req.body.mail,
		poste: req.body.poste
	}

);
	salarie.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Salarie created")
		}

		res.send(salarie);
	})
}

exports.editSalarie =  (req, res) => {
	salarie.findByIdAndUpdate(red.params.id,req.body, function (err, salarie) {
		if(err){
			console.log(err);
		}
		else{
			console.log('updated')
		}
		res.send(salarie);
	})
}

exports.listSalarie = function (req, res){
	Salarie.find(function(err , salarie) {
		if(err) {console.log(err)} ;
		res.send(salarie);
	})
};


exports.deleteSalarie = function(req, res){
	salarie.findByIdAndRemove(req.params.id, function (err){
		if(err) return(err);
		res.send('Deleted successfully!');
	})
};


exports.oneSalarie = (req, res) => {
	Salarie.findById(req.params.id, (err, salarie) => {
		if(err) {
			console.log(err);
		}
		res.send(salarie);
	})
}
