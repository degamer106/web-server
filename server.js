var express = require('express');

// Create an express instance
var app = express();
var PORT = 3000;

var middleware = require('./middleware');

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