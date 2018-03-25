// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('database.sqlite3');

// var map;
// function initMap( currloc={lat: -25.363, lng: 131.044} ) {
//     //var uluru = {lat: -25.363, lng: 131.044};
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 13,
//         center: currloc
//     });
//     var marker = new google.maps.Marker({
//         position: currloc,
//         map: map
//     });
//     geoJson = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "letter": "G",
//         "color": "blue",
//         "rank": "7",
//         "ascii": "71"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//             123.61, -22.14
//         ]
//       }
//     }
//   ]
// };
//     map.data.addGeoJson(geoJson)
//     map.data.setStyle(function() {
//         return {
//             icon: getCircle()
//         };
//     });
// }

// current user location
function getCircle() {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'blue',
        fillOpacity: .2,
        scale: 50,
        strokeColor: 'white',
        strokeWeight: .5
    };
}

// function geoFindMe() {
//     console.log("geoFindMe");
//     var output = document.getElementById("map");
  
//     function success(position) {
//         console.log("success");
//         var latitude  = position.coords.latitude;
//         var longitude = position.coords.longitude;
//         initMap({lat: latitude, lng: longitude});
//     }

//     function error() {
//         console.log("error");
//         output.innerHTML = "Unable to retrieve your location";
//         initMap();
//     }
//     if (!navigator.geolocation){
//       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//       return;
//     }
  
  
//     navigator.geolocation.getCurrentPosition(success, error);
// }

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 13
    });
    var f = new google.maps.Data.Feature([
        {geometry: new google.maps.LatLng({lat: 40.693552, lng: -73.965132}), id: 1, properties: {}},
        {geometry: new google.maps.LatLng({lat: 40.693552, lng: -73.98}), id: 2, properties: {}},
        {geometry: new google.maps.LatLng({lat: 40.7, lng: -73.98}), id: 3, properties: {}}
    ]);
    map.data.add(f);
    var latLng = new google.maps.LatLng(52.201203, -1.724370);
    map.data.add({
        geometry: latLng,
        id: "Test feature",
        properties: {}
    });

    console.log("get feature by id", map.data.getFeatureById("Test feature"));
    // geoJson = {
    // "type": "FeatureCollection",
    // "features": [
    //     {
    //     "type": "Feature",
    //     "properties": {
    //     },
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [
    //             40.691481, -73.968409
    //         ]
    //     }
    //     },
    //     {
    //         "type": "Feature",
    //         "properties": {
    //         },
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [
    //                 40.698606, -73.981756
    //             ]
    //         }
    //         },
    // ]
    // };
    // map.data.addGeoJson(geoJson)
    map.data.setStyle(function() {
        return {
            icon: getCircle()
        };
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("my curr location is ", pos);
        var marker = new google.maps.Marker({
                position: pos,
                map: map
        });
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }