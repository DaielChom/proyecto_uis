var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center:{lat: 4.6308316, lng: -74.1596599},
    zoom: 12
  });

  var ctaLayer = new google.maps.KmlLayer({
    //var src = 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/educacion/bienestarestudiantil/MapServer/0/query?where=1=1&outFields=*&f=kmz';

    url: 'http://sinupotp.sdp.gov.co:6080/arcgis/rest/services/SERVICIOS_GEOGRAFICOS/ESTRATIFICACION/MapServer/4/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&maxAllowableOffset=1&geometry={"xmin":-8249695.5897576865,"ymin":518548.8015347421,"xmax":-8249084.093531458,"ymax":519160.2977609709,"spatialReference":{"wkid":102100,"latestWkid":3857}}&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100&f=kmz',
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
