var state_mil = 
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "OBJECTID": 79, "name": "CSM Blair Lee Crockett Readiness Center", "component": "National Guard", "type": "Armory" }, "geometry": { "type": "Point", "coordinates": [ -75.617032676982305, 38.375979812579303 ] } }
]
}

var f = L.geoJson(field_layer, {
					style: {color: "#000000", fillColor: "#2471A3", fillOpacity: .2},
						onEachFeature: function (feature, layer){
							popupOptions = {maxWidth: 250};
							layer.bindPopup(feature.properties.name
							,popupOptions);
							}
						});