var library = 
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Type":"Library", "Name": "Centre Branch" }, "geometry": { "type": "Point", "coordinates": [ -75.571642191776235, 38.39820026197755 ] } },
{ "type": "Feature", "properties": { "Type":"Library", "Name": "Bivalve Station Branch" }, "geometry": { "type": "Point", "coordinates": [ -75.509476038745149, 38.340173794850223 ] } },
{ "type": "Feature", "properties": { "Type":"Library", "Name": "Pittsville Branch" }, "geometry": { "type": "Point", "coordinates": [ -75.616927131224642, 38.412753855650514 ] } },
{ "type": "Feature", "properties": { "Type":"Library", "Name": "Salisbury University Library" }, "geometry": { "type": "Point", "coordinates": [ -75.604809, 38.346380] } },
{ "type": "Feature", "properties": { "Type":"Library", "Name": "Wor-Wic Community College Library" }, "geometry": { "type": "Point", "coordinates": [ -75.502673214777801, 38.373757264907752 ] } },
{ "type": "Feature", "properties": { "Type":"Library", "Name": "Eastern Shore Regional Library" }, "geometry": { "type": "Point", "coordinates": [ -75.600791609159273, 38.364674197835214 ] } }
]
};
					
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
};


var k = L.geoJSON(library, {
				pointToLayer: function (feature, latlng) {
					return L.circleMarker(latlng, geojsonMarkerOptions);
				},
				onEachFeature: function (feature, layer){
					popupOptions = {maxWidth: 250};
					layer.bindPopup(feature.properties.Name
					,popupOptions);
					}
});
						
		
