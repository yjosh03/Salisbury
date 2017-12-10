var public_4y = 
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "OBJECTID": 4, "sitename": "Salisbury University" }, "geometry": { "type": "Point", "coordinates": [ -75.607368793395224, 38.343398752249001 ] } }
]
}


var h = L.geoJson(water_12, {
					style: {color: "#000000", fillColor: "#2471A3", fillOpacity: .2},
						onEachFeature: function (feature, layer){
							popupOptions = {maxWidth: 250};
							layer.bindPopup(feature.properties.sitename
							,popupOptions);
							}
						});