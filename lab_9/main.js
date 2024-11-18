// set the map and initial coordinates
var mymap = L.map('mapid').setView([0, 0], 1);

// set up some basic grey types
var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16});

// add the tiles to the map
Esri_WorldGrayCanvas.addTo(mymap);

// when the button on is clicked

$('#shakey').click(function() {

    console.log("getting quakes");

    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {

        console.log(result);

        result.features.forEach(function(quake) {
            //for each earthquake
            //get its coordinates
            var lng = quake.geometry.coordinates[0];
            var lat = quake.geometry.coordinates[1];
            
            //and it magnitude
            var mag = parseFloat(quake.properties.mag);
            
            //for each earthquakecreate a circle
            var circle = L.circle([lat, lng], mag * 10000, {
                color: 'red',
                opacity: 0,
                fillColor: 'red',
                fillOpacityL: 0.8
            })
            //and add it to the map
            circle.addTo(mymap);
        })

    });
});

// when the button on is clicked

$('#dropey').click(function() {

    console.log("getting meteors");

    $.getJSON("https://data.nasa.gov/resource/gh4g-9sfh.json", function(result) {

        console.log(result);

        result.features.forEach(function(meteor) {

             //for each meteors
            //get its coordinates
            var lng = meteor.geometry.coordinates[0];
            var lat = meteor.geometry.coordinates[1];

            //and get its mass
            var mass = parseFloat(meteor.properties.mass) || 1;

            //sclae mass for better visibility
            var size = Math.sqrt(mass) * 10;

            //for each meateorstriked a circle
            var circle = L.circle([lat, lng], size, {
                color: 'blue',
                opacity: 0,
                fillColor: 'blue',
                fillOpacity: 0.8
            })
            //and add it to the ma
            .addTo(mymap).bindPopup('Name: ' + meteor.properties.name);
        });

    });
});