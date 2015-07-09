function initialize () {
	var mapCanvas = document.getElementById('map-canvas');
	var mapOptions = {
		center: new google.maps.LatLng(-22.921599, -43.422000),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDoubleClickZoom: true,
		streetViewControl: false,
		// minZoom: 11,
		panControl: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var bound
    google.maps.event.addListener(map, 'tilesloaded', function() {
    	bound = map.getBounds()
    	console.log(bound.toString())
    	// map.setOptions({center: bound.getNorthEast(), zoom: 13})
    	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
		var marker = new google.maps.Marker({
			position: bound.getSouthWest(),
			map: map,
			icon: iconBase + 'schools_maps.png',
			title: 'see me here'
		})
		var marker = new google.maps.Marker({
			position: bound.getNorthEast(),
			map: map,
			icon: iconBase + 'schools_maps.png',
		})
    })
}

function googleBoundToArray (bound) {
	return [bound.za.A, bound.ra.j, bound.za.j, bound.ra.A]
}

function arrayToGoogleBound (array) {
	return new google.maps.LatLngBounds(
			new google.maps.LatLng(array[0], array[1]), 
			new google.maps.LatLng(array[2], array[3]))
}

google.maps.event.addDomListener(window, 'load', initialize);