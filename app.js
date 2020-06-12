let map;
let sightings = [{
    "datetime": "10/11/2008 19:00",
    "city": "bridgeport",
    "state": "ct",
    "country": "us",
    "shape": "circle",
    "duration (seconds)": 7200,
    "duration (hours/min)": "2 hours",
    "comments": "I saw 6 glowing orbs lining up in different formations witin a 2 hour period over Long Island Sound.",
    "date posted": "10/31/2008",
    "latitude": 41.1669444,
    "longitude": -73.2052778
}];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
    for (let i = 0; i < sightings.length; i++) {
        
        let marker = new google.maps.Marker({
            position: {lat: parseFloat(sightings[i].latitude), lng: parseFloat(sightings[i].longitude)},
            title: sightings[i].city + " " + sightings[i].state + " " + sightings[i].shape
        });
        marker.setMap(map);
    }
}

if (navigator.geolocation) {
    window.onload = function() {
        let geoSuccess = function(position) {
           map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
        };
        let geoError = function(error) {
            console.log("Error occurred. Error code: " + error.code);
        };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
}
