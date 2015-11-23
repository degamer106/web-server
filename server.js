var express = require('express');

// Create an express instance
var app = express();
var PORT = 3000;

// Route Level middleware -- pass into app.use
var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('Private route hit');
		next();
	},
	logger: function(req, res, next) {
		var date = new Date().toString();

		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalURL);
		next();
	}
}

// Middleware definitions must be defined first
app.use(middleware.logger);

// Specify routes within your web site
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

// Expose a folder in your project
app.use(express.static(__dirname + '/public'));


// Tell to app to listen on a port
app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '...');
});