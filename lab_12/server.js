var express =  require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

var spotifyApi = new SpotifyWebApi({
    clientId: '307619f0099d47608888f7f73bd463b8',
    clientSecret: '6a03278a9df94716bce210b8446f8d15'
});

spotifyApi.clientCredentialsGrant().them(
    function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        spotifyApi.setAccessToken(data.body['access_token']);

    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

async function getTracks(searchterm, res) {
    spotifyApi.searchTracks(searchterm)
        .then(function (data) {
            res.send(JSON.stringify(data.body));
        }, function (err) {
            console.error(err);
        });
}

app.get('/searchLove', function (req, res) {
    getTracks('love', res);
});

app.listen(8080);