var express =  require('express');
var knockknock = require('knock-knock-jokes');
var app = express();

app.get('/joke', function(req, res){
    var randomJoke = knockknock()
    res.send(randomJoke);
});

app.listen(8080);