const users = require('./../controllers/users.js');
const adds = require('./../controllers/adds.js');
const {resolve} = require('path');

module.exports = function(app) {
	app.post('/upload', (req,res)=>{
		console.log(req.body)
		adds.newImg(req,res)
	})
	app.get('/imgs', (req,res)=>{
		adds.getimgs(req,res);
	})
	app.get("/session", (req,res)=>{
		users.session(req, res);
	})
	app.post('/login', (req,res)=>{
	  users.login(req,res);
	});
	
	app.get('/logout', (req,res)=>{
		users.logout(req,res);
	})
	app.get('/users',(req,res)=>{
		users.findAll(req,res)
	});
	app.delete('/all', (req,res)=>{
		users.delAll(req,res)
	})
	app.post('/register', (req,res) =>{
	  users.register(req,res);
	})
	app.get('*', (req,res)=>{
		res.sendFile(resolve(__dirname, '..','..','public', 'dist', 'index.html'))
	})
	app.delete('/img/:id', (req,res)=>{
		adds.delete(req,res);
	})
}