function initialize() {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var myOptions = {
        center: new google.maps.LatLng(45.4555729, 9.169236),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        panControl: true,
        mapTypeControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: false,
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
    };

    var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
    directionsDisplay.setMap(map);


    var puntoA = new google.maps.LatLng(45.5983128, 10.9172776);

    var puntoB = new google.maps.LatLng(45.4555729, 9.169236);

    var markerA = new google.maps.Marker({
        position: puntoA,
        map: map
    });

    var markerb = new google.maps.Marker({
        position: puntoB,
        map: map
    });

    var bounds = new google.maps.LatLngBounds();
    bounds.extend(puntoA);
    bounds.extend(puntoB);
    map.fitBounds(bounds);

  var request = {
      origin:puntoA,
      destination:puntoB,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

}
initialize();
