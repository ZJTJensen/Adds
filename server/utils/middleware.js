const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = function(app) {
	'use strict';
	app.use(session({secret: "Zachisaboss"}));
	app.use(express.static(path.join(__dirname,'/../../public/dist')));

	app.use(bodyParser.json({limit: '50mb'}));
	app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
	app.use(express.json())
	console.log('Middleware initialized');
};
