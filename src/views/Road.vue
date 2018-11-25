<template>
  <div class="find-road">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center page__title">Find road</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 offset-xl-3 col-xl-6">
          <h3>1. Find car (KWA2137)</h3>
          <el-input placeholder="Please typee plate number" v-model="plate_number" class="input-with-select">
            <el-button @click="findCar" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div v-if="vehicle" class="col-12 offset-xl-3 col-xl-6">
          <h3>2. Confirm car, chose destination and type your gate</h3>
          <el-select v-model="currentDestination" placeholder="Select destination point">
            <el-option
              v-for="place in places"
              :key="place.id"
              :label="place.name"
              :value="place.id">
            </el-option>
          </el-select>

          <el-select v-model="startGate" placeholder="Select your gate point">
            <el-option
              v-for="gate in gates"
              :key="gate.id"
              :label="gate.name"
              :value="gate.id">
            </el-option>
          </el-select>

          <el-button @click="findRoad" type="primary" icon="el-icon-search">Search</el-button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from '@/api/v1/admin';

export default {
  data() {
    return {
      plate_number: '',
      currentDestination: '',
      startGate: '',
      vehicle: '',
      places: '',
      gates: '',
    };
  },
  methods: {
    findCar() {
      adminApi.vehicles.show({plate_number: this.plate_number}).then((resp) => {
        this.vehicle = resp.data.vehicle;
        this.places = resp.data.places;
        this.gates = resp.data.gates;
      }).catch(() => {
        this.$message({
          message: 'Error, try again!',
          type: 'warning',
        });
      });
    },
    findRoad() {
      adminApi.nodes.show({
        vehicle_id: this.vehicle.id,
        place_id: this.currentDestination.id,
        gate_id: this.startGate.id,
      }).then((resp) => {
        console.log(resp);
      }).catch(() => {
        this.$message({
          message: 'Error, try again!',
          type: 'warning',
        });
      });
    },
  },
};
</script>
