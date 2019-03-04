const express = require('express');
const app = express();
const mongoose = require('mongoose');
const projetController = require("./controllers/projet.controller.js")
const clientController = require("./controllers/client.controller.js")
const salarieController = require("./controllers/salarie.controller.js")
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const cors = require('cors');
app.use(cors({origin: 'http://localhost:8080'}));

mongoose.connect('mongodb://projettrois:kk1234567@ds159624.mlab.com:59624/projettrois' , (err) =>{
	if(err){
		console.log("ce n'est pas connecté à la base de donné")
	}
	else{
		console.log('Bien connecté à la base de donné');
	}
});



app.post('/createClient/',clientController.createUser)
app.post('/editClient/:id',clientController.editUser)
app.get('/listClient/',clientController.listClient)
app.post('/deleteClient/:id',clientController.deleteClient)
app.get('/oneClient/:id',clientController.oneClient)
app.post('/createProjet/',projetController.createProjet)
app.post('/editProjet/:id',projetController.editProjet)
app.get('/listProjet/',projetController.listProjet)
app.get('/oneProjet/:id',projetController.oneProjet)
app.post('/deleteProjet/:id',projetController.deleteProjet)
app.post('/createSalarie/',salarieController.createSalarie)
app.post('/editSalarie/:id',salarieController.editSalarie)
app.get('/listSalarie/',salarieController.listSalarie)
app.post('/deleteSalarie/:id',salarieController.deleteSalarie)
app.get('/oneSalarie/:id',salarieController.oneSalarie)




app.listen(3000 , () =>{
	console.log('Serveur est allumé');
});


