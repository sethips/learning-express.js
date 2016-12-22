var express = require('express');
var app = express();

var locations = {
    'Fixed': 'First Floor',
    'Movable': 'Second Floor',
    'Rotate': 'Pent House'
};

app.param('name', function(request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase;

    request.blockName = block;
    next();
});

app.get('/blocks/:name', function(request, response) {
    var description = blocks[request.blockName]; 
})

app.get('/locations/:name', function(request, response) {
    var location = locations[request.blockName]; 
})


app.listen(3000, function() {
    console.log('Listening on port 3000');
});
