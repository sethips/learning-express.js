var express = require('express');
var app = express();

var blocks = {
	'Fixed': 'Fastened securely',
	'Movable': 'Capable of moving',
	'Rotate': 'Rotates in circle'  
};

app.get('/blocks/:name', function(request, response) {
	var description = blocks[request.params.name];
	if(!description) {
		response.status(404).json('Not found ' + request.params.name);
	} else {
		response.json(description + '\n');
	}
	
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});