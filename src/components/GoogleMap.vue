<template>
  <div class="google-map-component">
    <div>
      <div class="google-map" :id="mapName"></div>
    </div>

    <b-modal ref="modalAddEvent" id="modal1" title="ADD AN EVENT" :hide-footer="true">
      <add-event></add-event>
    </b-modal>

    <b-btn class="modal-button" v-b-modal.modal2>Add new place</b-btn>
    <!-- Modal Component -->
    <b-modal id="modal2" title="ADD A PLACE" :hide-footer="true">
      <add-place></add-place>
    </b-modal>
  </div>

</template>

<script>
import adminApi from '@/api/v1/admin';
import AddEvent from '@/components/AddEvent';
import AddPlace from '@/components/AddPlace';

export default {
  components: { AddEvent, AddPlace },
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

    const vm = this;

    adminApi.roads.index().then((resp) => {
      this.roads = resp.data.roads;

      for(let i=0; i<this.roads.length; i++) {
        let color = 'green';
        if(this.roads[i].events) {
          color = 'orange';
        }
        if (this.roads[i].closed) {
          color = 'red';
        }
        // const color = this.roads[i].open ? 'green' : 'red';
        const roadPath = new google.maps.Polyline({
          path: this.roads[i].path,
          geodesic: true,
          strokeColor: color,
          strokeOpacity: 1.0,
          strokeWeight: 5,
        });

        roadPath.setMap(map);

        google.maps.event.addListener(roadPath, 'click', function(h) {
           vm.$refs.modalAddEvent.show();
           console.log(roadPath.De.geometry.bounds);
        });
      }
    });

  },
  methods: {
    showModal () {
      this.$refs.modalAddEvent.show();
    },
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
