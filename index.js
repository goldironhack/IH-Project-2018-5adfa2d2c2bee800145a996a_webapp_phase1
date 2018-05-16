const API_KEY = "AIzaSyCKLOC2nNGCag9x82Xj206A5h5VhxVTCXA";

//MAPA
var map;
var coordenadasNYU={lat:40.7291, lng:-73.9965};
var dService;
var dRenderer;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: coordenadasNYU
        });

        dService = new google.maps.DirectionsService();
        dRenderer = new google.maps.DirectionsRenderer();

        map.data.loadGeoJson(
          'http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson'
        );
}

//TABLA Y EXPOTAR DATOS

const BARRIOS_URL = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
var infoRows= [];

function getData(){
  var data = $.get (BARRIOS_URL, function() {})
    .done(function(){
      console.log(data.responseJSON.data);
      //console.log(infoRows);
    })
    .fail(function error(){
      console.log(error);
    })
}

$(document).ready(function(){
  $("#botOrdenar").on("click",getData)
});



// barra de navegación
ocultar();
mostrarInicio();

function ocultar(){
  $('#pestañaClasificacion').hide();
  $('#pestañaMapa').hide();
  $('#pestañaInicio').hide();
  $('#pestañaGraficas').hide();
}

function mostrarMapa() {
  ocultar();
  $("#pestañaMapa").show();
}

function mostrarClasificacion() {
  ocultar();
  $("#pestañaClasificacion").show();
}

function mostrarInicio() {
  ocultar();
  $("#pestañaInicio").show();
}

function mostrarGraficas() {
  ocultar();
  $("#pestañaGraficas").show();
}

$(document).ready(function(){
  $("#navClasificacion").on("click",mostrarClasificacion);
});

$(document).ready(function(){
  $("#navMapa").on("click",mostrarMapa);
});

$(document).ready(function(){
  $("#navInicio").on("click",mostrarInicio);
});

$(document).ready(function(){
  $("#navGraficas").on("click",mostrarGraficas);
});
