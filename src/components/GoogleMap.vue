<template>
  <div class="google-map-component">
    <div>
      <div class="google-map" :id="mapName"></div>
    </div>

    <b-modal ref="modalAddEvent" id="modal1" title="ADD AN EVENT" :hide-footer="true">
      <div class="add-event">
        <div class="container-fluid">
          <div class="row">

            <div class="col-12 col-xl-10 offset-xl-1">

              <el-form ref="form1" label-position="top" :model="event" label-width="120px">
                <el-form-item label="Description of the occurance" type="textarea"
                :rows="2" :class="{'error-show': $v.event.name.$error }">
                  <el-input v-model="$v.event.name.$model"></el-input>
                  <div class="error" v-if="!$v.event.name.required">Field is required</div>
                </el-form-item>

                <el-form-item label="Passable road narrowed by(in cm)" :class="{'error-show': $v.event.width.$error }">
                  <el-input v-model="$v.event.width.$model"></el-input>
                  <div class="error" v-if="!$v.event.width.required">Field is required</div>
                  <div class="error" v-if="!$v.event.width.integer">Value must be a number</div>
                </el-form-item>

                <el-form-item label="Max height of the passable road(in cm)"
                :class="{'error-show': $v.event.height.$error }">
                  <el-input v-model="$v.event.height.$model"></el-input>
                  <div class="error" v-if="!$v.event.height.required">Field is required</div>
                  <div class="error" v-if="!$v.event.height.integer">Value must be a number</div>
                </el-form-item>

                <el-button type="primary mx-auto d-block" @click="sendEvent()">Submit</el-button>

              </el-form>

            </div>

          </div>
        </div>
      </div>
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
import { required, integer } from 'vuelidate/lib/validators';
import AddPlace from '@/components/AddPlace';

export default {
  components: { AddPlace },
  name: 'google-map',
  props: ['name'],
  data() {
    return {
      event: {
        name: '',
        width: 0,
        height: 0,
      },
      mapName: this.name + '-map',
      roads: [],
      roadId: '',
    };
  },
  validations: {
    event: {
      name: {
        required,
      },
      width: {
        required,
        integer,
      },
      height: {
        required,
        integer,
      },
    },
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
          strokeOpacity: '0.9' + this.roads[i].id,
          strokeWeight: 5,
        });

        roadPath.setMap(map);

        google.maps.event.addListener(roadPath, 'click', function(h) {
           vm.$refs.modalAddEvent.show();
           vm.roadId = roadPath.De.geometry.bounds.poly.style.strokeOpacity * 10000 - 9000;
        });
      }
    });

  },
  methods: {
    showModal () {
      this.$refs.modalAddEvent.show();
    },
    sendEvent() {
      adminApi.events.create({
        road_id: this.roadId,
        width: 100,
        height: 100,
      }).then((resp) => {
        this.$message({
          message: 'Success!',
          type: 'success',
        });
      }).catch((resp) => {
        this.$message({
          message: 'Error, try again!',
          type: 'warning',
        });
      });
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
