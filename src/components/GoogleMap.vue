<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
import adminApi from '@/api/v1/admin';

export default {
  name: 'google-map',
  props: ['name'],
  data() {
    return {
      mapName: this.name + '-map',
      roads: [],
    };
  },
  created() {
  },
  mounted() {
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(52.5867573,19.6618422),
    };
    const map = new google.maps.Map(element, options);

    adminApi.roads.index().then((resp) => {
      console.log(resp);
      this.roads = resp.data.roads;

      for(let i=0; i<this.roads.length; i++) {
        const color = this.roads[i].open ? 'green' : 'red';
        const roadPath = new google.maps.Polyline({
          path: this.roads[i].path,
          geodesic: true,
          strokeColor: color,
          strokeOpacity: 1.0,
          strokeWeight: 5,
        });

        roadPath.setMap(map);

        google.maps.event.addListener(roadPath, 'click', function(h) {
           console.log(roadPath.De.geometry.bounds);
        });
      }
    });

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
