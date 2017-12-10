var public_2y = 
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "OBJECTID": 16, "sitename": "Wor-Wic Community College" }, "geometry": { "type": "Point", "coordinates": [ -75.501396155396847, 38.373836769401507 ] } }
]
}

var i = L.geoJson(water_12, {
					style: {color: "#000000", fillColor: "#2471A3", fillOpacity: .2},
						onEachFeature: function (feature, layer){
							popupOptions = {maxWidth: 250};
							layer.bindPopup(feature.properties.sitename
							,popupOptions);
							}
						});