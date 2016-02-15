var express = require('express'),
	mongoose = require('mongoose');

var app = express();


var port = process.env.PORT || 3000;

var bookRouter = express.Router();


bookRouter.route('/Books')
	.get(function(req, res) {
		var responseJson = {hello: 'this is my api'};

		res.json(responseJson);
	});
app.use('/api', bookRouter);

app.get('/',function(req, res) {
	res.json( 'welcome to my api');
});

app.listen(port, function() {
	console.log('running on port:', port);
});

