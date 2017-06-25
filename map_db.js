function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;
  var pos;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

            // console.log(pos);
            // pushLocation(pos.lat, pos.lng);
            // pullLocations();

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
    return pos;
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
        infoWindow.open(map);
      }

function pushLocation(firebase, pos, userid) {
    var data = pos;
    var updates = {};
    updates[userid] = data;
    return firebase.database().ref().update(updates);
  //   var ref = firebase.database().ref("users/");
  //   var exists;
  //   ref.once("value")
  // .then(function(snapshot) {
  //   exists = snapshot.child(userid).exists(); 
  // });
  //   if (exists) {
  //     firebase.database().ref('users/').set(updates);
  //   } else {
  //     firebase.database().ref('users/').push(updates);
  //   }
  }