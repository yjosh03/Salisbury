var police =
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Type":"County", "Name": "Wicomico County Sheriff's Office" }, "geometry": { "type": "Point", "coordinates": [ -75.577760666583714, 38.408588304999526 ] } },
{ "type": "Feature", "properties": { "Type":"Municipal", "Name": "Salisbury City Police Department" }, "geometry": { "type": "Point", "coordinates": [ -75.614244053913808, 38.369502605123515 ] } },
{ "type": "Feature", "properties": { "Type":"Municipal", "Name": "Fruitland Police Department" }, "geometry": { "type": "Point", "coordinates": [ -75.62006395746694, 38.316931115930693 ] } },
{ "type": "Feature", "properties": { "Type":"Municipal", "Name": "Delmar Police Department" }, "geometry": { "type": "Point", "coordinates": [ -75.577995294857843, 38.455240600072834 ] } }
]
}
				
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#e41a1c",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};

var n = L.geoJSON(police, {
				pointToLayer: function (feature, latlng) {
					return L.circleMarker(latlng, geojsonMarkerOptions);
				},
				onEachFeature: function (feature, layer){
					popupOptions = {maxWidth: 250};
					layer.bindPopup(feature.properties.Name +" "+ feature.properties.Type
					,popupOptions);
					}
});	
