function GoogleMap(map_id) {
    // Represents a Google Map instance including all markers displayed on the
    // map and the data in the marker info windows.
    var map = new GMap2($("#" + map_id));
    var manager = new MarkerManager(this.map);
    var markers = [];

    var createMarker = function(latitude, longitude, marker_options) {
        // Creates a new marker using the given latitude and longitude.
        var latlng = new GLatLng(latitude, longitude);
        var marker = new GMarker(latlng, marker_options);
        this.markers.push(marker);
    }

    var displayMarkers = function() {
        this.manager.addMarkers(this.markers, 3, 10);
        this.manager.refresh();  
    }
}
