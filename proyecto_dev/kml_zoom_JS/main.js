var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center:{lat: 4.6308316, lng: -74.1596599},
    zoom: 12
  });

  var ctaLayer = new google.maps.KmlLayer({
    //var src = 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/educacion/bienestarestudiantil/MapServer/0/query?where=1=1&outFields=*&f=kmz';

    url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/educacion/bienestarestudiantil/MapServer/0/query?where=1=1&outFields=*&f=kmz',
    suppressInfoWindows: true,
                map: map,
                preserveViewport: true
  });

}


  html2canvas($("#map"), {
      useCORS: true,
//                        allowTaint:true,
      onrendered: function(canvas) {

          theCanvas = canvas;

          Canvas2Image.saveAsPNG(canvas);


      }
  });
