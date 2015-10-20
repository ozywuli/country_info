(function($) {


L.mapbox.accessToken = 'pk.eyJ1IjoiYW9zaWthIiwiYSI6IjQzRGIxeEkifQ.7OvmyBbXwwt9Qxjlh9Qd3w';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([0, 0], 2);

$.getJSON('assets/data/countries.geo.json', function(data) {


  var myLayer = L.mapbox.featureLayer().addTo(map);
  myLayer.setGeoJSON(data);
  var geoJSON = data;

  myLayer.eachLayer(function(layer) {
    layer.on('click', function(e) {
      console.log($(this)[0].feature.properties.name);
    })
  })

});




$(function() {

  $.ajax({
    url: 'https://restcountries-v1.p.mashape.com/all',
    type: 'GET',
    data: {},
    datatype: 'json',
    success: function(data) {
      console.log(data.length);
      console.log(data[0].name);
    }, // end success
    error: function(err) {
      console.log(err);
    }, // end error
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "J10aBMA4cAmshoCjGohz6QX42UMlp1du2X9jsnZRUQa0QLICnc");
    } // end beforeSend

  }) // end ajax

})


})(jQuery);