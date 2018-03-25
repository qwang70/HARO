// current user location
function getCircle() {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'blue',
        fillOpacity: .2,
        scale: 20,
        strokeColor: 'white',
        strokeWeight: .5
    };
}
function showInfo(e, map, directionsDisplay){
    var infoWindow = new google.maps.InfoWindow({map: map});
    var feature = e.feature.f;
    infoWindow.setPosition(e.latLng);
    infoWindow.setContent('<div><strong>'+ feature.username + 
      "</strong> need a <strong>"+ feature.resource + 
      "</strong></br>Message: "+feature.description + 
      '</br></br><button style=\"background-color: #4CAF50; /* Green */\
      border: none;\
      color: white;\" type=\"button\" onclick=\"alert(\'Request Taken\')\">\
      Deliver the resource to her</button></div>');
    calcRoute(map.center, e.latLng);
}
function calcRoute(start, end, directionsDisplay) {
  var request = {
    // origin: start,
    start: {lat:40.693827, lng: -73.986884},
    destination: end,
    travelMode: 'WALKING'
  };
  var self = this;
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      self.directionsDisplay.setDirections(result);
    }
  });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.6935413, lng: -73.9651478},
      zoom: 13
    });

    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

    map.data.add(new google.maps.Data.Feature(
      {geometry: new google.maps.LatLng({lat: 40.670242, lng: -73.951678}), id: 1, 
      properties: {username: 'Julie', resource: 'A Blanket', description: 'Hi, I am Julie. I need a blanket for the winter'}}));
    map.data.add(new google.maps.Data.Feature(
      {geometry: new google.maps.LatLng({lat: 40.693552, lng: -73.98}), id: 2, 
      properties: {username: 'Cute Girl', resource: 'School Suppliers', description: 'pencils, notebooks, rulers for kids to go to school. Thank you!'}}));
    map.data.add(new google.maps.Data.Feature(
      {geometry: new google.maps.LatLng({lat: 40.687949, lng:  -73.992877}), id: 3, 
      properties: {username: 'Julie', resource: 'Clothes', description: 'Hi, I need some clothes for my 8 yr old boy'}}));
    map.data.add(new google.maps.Data.Feature(
      {geometry: new google.maps.LatLng({lat: 40.712415, lng:  -73.986182}), id: 4, 
      properties: {username: 'Nathen', resource: 'Band Aid', description: 'band aid for my ankle'}}));
    map.data.add(new google.maps.Data.Feature(
      {geometry: new google.maps.LatLng({lat: 40.693414, lng:  -73.953566}), id: 5, 
      properties: {username: 'Julie', resource: 'diaper', description: 'badly in need of diaper'}}));
             
    var latLng = new google.maps.LatLng(52.201203, -1.724370);
    map.data.add({
        geometry: latLng,
        id: "Test feature",
        properties: {}
    });
   
    map.data.setStyle(function() {
        return {
            icon: getCircle()
        };
    });
    map.data.addListener('click', function(e) {
      showInfo(e, map, directionsDisplay);
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var marker = new google.maps.Marker({
                position: pos,
                map: map
        });
        map.setCenter(pos);
        directionsDisplay.setMap(map);
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