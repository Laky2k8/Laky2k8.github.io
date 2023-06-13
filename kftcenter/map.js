

var southWest = L.latLng(48.5081, 21.4477),
northEast = L.latLng(48.5723, 21.5009);

var bounds = L.latLngBounds(southWest, northEast);

var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 13,
    attribution: '© OpenStreetMap'
})

var WaymarkedTrails_hiking = L.tileLayer('https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 13,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://waymarkedtrails.org">waymarkedtrails.org</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 13,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    minZoom: 13,
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var OpenWeatherMap_Clouds = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid={apiKey}', {
    maxZoom: 19,
    minZoom: 13,
	attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
	apiKey: 'ef0d1160876334531df6fecc20cf9fd6',
	opacity: 10.0
});


var baseMaps = {
    "OpenStreetMap": baseLayer,
    "Helyrajzi térkép": CyclOSM,
    "Műholdkép": Esri_WorldImagery
};

var overlayMaps = {
    "Túrautak": WaymarkedTrails_hiking,
    "Felhőzet": OpenWeatherMap_Clouds
};

 var map = new L.Map('map', {
    center: bounds.getCenter(),
    zoom: 19,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    layers: [baseLayer, WaymarkedTrails_hiking]
  });




var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

map.setMaxBounds(bounds);

map.setView([48.5467171, 21.4868106], 13);

map.invalidateSize();


var oregB = L.marker([48.5454767, 21.4861967]).addTo(map);
oregB.bindPopup("Az <b>Öreg Bence</b>, <br> a 'főhadiszállás'");

var izra = L.marker([48.56964, 21.49285]).addTo(map);

map.invalidateSize();

map.on('drag', function() {
    map.panInsideBounds(bounds);
    map.invalidateSize();
});

map.on('mouseover', function() {
    map.invalidateSize();
});

map.on('click', function() {
    map.invalidateSize();
});

map.on('transitionend', function() {
    map.invalidateSize();
});




