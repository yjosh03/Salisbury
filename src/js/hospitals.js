var hospitals = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Type":"Hospital", "Name": "Deer's Head Center" }, "geometry": { "type": "Point", "coordinates": [ -75.59585744357797, 38.382236323347016 ] } },
{ "type": "Feature", "properties": { "Type":"Hospital", "Name": "Healthstone Chesapeake Rehabilitation Hospital" }, "geometry": { "type": "Point", "coordinates": [ -75.548571830227701, 38.369298921774089 ] } },
{ "type": "Feature", "properties": { "Type":"Hospital", "Name": "Peninsula Regional Medical Center" }, "geometry": { "type": "Point", "coordinates": [ -75.598405336116642, 38.362027348820881 ] } }
]
}
				
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#377eb8",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};

var l = L.geoJson(hospitals, {
					pointToLayer: function (feature, latlng) {
					return L.circleMarker(latlng, geojsonMarkerOptions);
				},
						onEachFeature: function (feature, layer){
							popupOptions = {maxWidth: 250};
							layer.bindPopup(feature.properties.Name
							,popupOptions);
							}
						});						
						
						
