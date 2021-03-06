'use strict'; 
const User = require('./user.server.controller')

module.exports = function(app){
	// API Server Endpoints
	app.post('/user', User.create);
	app.post('/login', User.login);
	app.post('/forgot', User.forgotPassword);
	app.post('/reset', User.newPassword);
	app.post('/verifyLink', User.verifyEmail);
}