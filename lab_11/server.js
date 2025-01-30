var express =  require('express');
var app = express();

app.get('/add', function(req, res){
    var x = req.query.s;
    var y = req.query.y;
    res.send("X + Y="+(x+y));
});

app.listen(8080);