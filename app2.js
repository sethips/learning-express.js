var express = require('express');
var app = express();

var blocks = {
    'Fixed': 'Fastened securely',
    'Movable': 'Capable of moving',
    'Rotate': 'Rotates in circle'
};
app.use(express.static('public'));


app.get('/blocks/:name', function(request, response) {
    // var description = blocks[request.params.name];
    // if (!description) {
    //     response.status(404).json('Not found ' + request.params.name);
    // } else {
    //     response.json(description);
    // }
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[block];
    if (!description) {
    	response.status(404).json('Not Found ' + request.params.name)
    } else {
    	response.json(description);
    }

});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
