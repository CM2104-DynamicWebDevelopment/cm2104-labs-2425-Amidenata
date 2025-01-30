var express =  require('express');
var app = express();
var knockknock = require('knock-knock-jokes');

app.get('/', function(req, res){
 var randomJoke = knockknock()
 res.send(randomJoke);
});

app.listen(8080);