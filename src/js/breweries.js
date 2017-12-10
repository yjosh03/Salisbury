var brew = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Type":"Brewery", "Name": "Evolution Craft Brewing Co Delmar" }, "geometry": { "type": "Point", "coordinates": [ -75.595959984471037, 38.361816404158311 ] } },
]
}

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#4daf4a",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};

var o = L.geoJson(brew, {
					pointToLayer: function (feature, latlng) {
					return L.circleMarker(latlng, geojsonMarkerOptions);
				},
						onEachFeature: function (feature, layer){
							popupOptions = {maxWidth: 250};
							layer.bindPopup(feature.properties.Name
							,popupOptions);
							}
						});						
						
