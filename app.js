let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
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

