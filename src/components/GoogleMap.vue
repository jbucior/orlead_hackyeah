<template>
  <div class="google-map" :id="mapName">
  </div>
</template>

<script>
export default {
  name: 'google-map',
  props: ['name'],
  data() {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 51.501527,
        longitude: -0.1921837
      }, {
        latitude: 51.505874,
        longitude: -0.1838486
      }, {
        latitude: 51.4998973,
        longitude: -0.202432
      }],
      roads: [
        [
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
        ],
        [
          {lat: 36.772, lng: -123.214},
          {lat: 22.291, lng: -156.821},
        ],
        [
          {lat: 35.772, lng: -120.214},
          {lat: 20.291, lng: -156.821},
        ],
      ],
    };
  },
  mounted() {
    // const bounds = new google.maps.LatLngBounds();

    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 2,
      center: new google.maps.LatLng(51.501527,-0.1921837),
    };
    const map = new google.maps.Map(element, options);

    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map
      });

      // map.fitBounds(bounds.extend(position))
    });

    for(let i=0; i<this.roads.length; i++) {
      const flightPath = new google.maps.Polyline({
        path: this.roads[i],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      flightPath.setMap(map);
    }

  },
};
</script>
<style>
.google-map {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>
