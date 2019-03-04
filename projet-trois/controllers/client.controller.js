const Client = require("../models/client.model.js")


exports.createUser = (req, res) => {
	let client = new Client(
	{
		
		nomEntreprise: req.body.nomEntreprise,
		adresse: req.body.adresse,
		contact: {},
		secteurActivite: req.body.secteurActivite
	}

);
	client.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("User created")
		}

		res.send(client);
	})
}

exports.editUser =  (req, res) => {
	Client.findByIdAndUpdate(red.params.id,req.body, function (err, client) {
		if(err){
			console.log(err);
		}
		else{
			console.log('updated')
		}
		res.send(client);
	})
}

exports.listClient = function (req, res){
	Client.find(function(err , client) {
		if(err) {console.log(err)} ;
		res.send(client);
	})
};


exports.deleteClient = function(req, res){
	Client.findByIdAndRemove(req.params.id, function (err){
		if(err) return(err);
		res.send('Deleted successfully!');
	})
};

exports.oneClient = (req, res) => {
	Client.findById(req.params.id, (err, client) => {
		if(err) {
			console.log(err);
		}
		res.send(client);
	})
}