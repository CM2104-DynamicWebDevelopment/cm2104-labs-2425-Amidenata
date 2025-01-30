var express =  require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
});

app.get('/add', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send("X + Y="+(x+y));
});

app.get('/calc', function(req, res){
    var x = parseFloat(req.query.x);
    var y = parseFloat(req.query.y);
    var operator = req.query.operator;
    var result;

    switch(operator) {
        case 'add':
            result = x + y;
            break;
        case 'sub':
            result = x - y;
            break;
        case 'mul':
            result = x * y;
            break;
        case 'div':
            if (y === 0) {
                return res.send("Error: Division by zero is not allowed.");
            }
            result = x / y;
            break;
        default:
            return res.send("Error: Invalid operator. Use add, sub, mul, or div.");
    }

    res.send("Result:" + result);
});

app.listen(8080);