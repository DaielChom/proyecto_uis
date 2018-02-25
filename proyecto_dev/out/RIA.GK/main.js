var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {



    center:{lat: 4.630, lng: -74.159},
    zoom: 1
  });

  var puntoA = new google.maps.LatLng(-29.84,-53.0);
  var puntoB = new google.maps.LatLng(-29.45,-51.98);

  //var puntoA = new google.maps.LatLng(4.630, -74.159);
  //var puntoB = new google.maps.LatLng(4.640, -74.222);

  //var puntoA = new google.maps.LatLng(45.4555729, 9.3172776);
  //var puntoB = new google.maps.LatLng(45.5983128, 9.169236);

  //var puntoA = new google.maps.LatLng(-29.44, -52.0);
  //var puntoB = new google.maps.LatLng(-29.45, -51.98);

  var bounds = new google.maps.LatLngBounds();
  bounds.extend(puntoA);
  bounds.extend(puntoB);
  map.fitBounds(bounds);

  var markerA = new google.maps.Marker({
      position: puntoA,
      map: map
  });

  var markerb = new google.maps.Marker({
      position: puntoB,
      map: map
  });

  var ctaLayer = new google.maps.KmlLayer({
    //var src = 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/educacion/bienestarestudiantil/MapServer/0/query?where=1=1&outFields=*&f=kmz';

    url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/educacion/bienestarestudiantil/MapServer/0/query?where=1=1&outFields=*&f=kmz',
    suppressInfoWindows: true,
                map: map,
                preserveViewport: true
  });

}

$("#btnSave").on('click',()=>{
  console.log("Click");

  html2canvas($("#map"), {
      useCORS: true,
//                        allowTaint:true,
      onrendered: function(canvas) {

          theCanvas = canvas;

          Canvas2Image.saveAsPNG(canvas);


      }
  });
})
