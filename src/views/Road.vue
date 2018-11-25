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
          <h3>1. Find car</h3>
          <el-input placeholder="Please typee plate number" v-model="plate_number" class="input-with-select">
            <el-button @click="findCar" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div v-if="vehicle" class="col-12 offset-xl-3 col-xl-6">
          <h3>2. Confirm car, chose destination and type your gate</h3>
          <el-select v-model="currentDestination" placeholder="Select destination point">
            <el-option
              v-for="destination in vehicle.destinations"
              :key="destination"
              :label="destination"
              :value="destination">
            </el-option>
          </el-select>

          <el-select v-model="startGate" placeholder="Select your gate">
            <el-option
              label="gate1"
              value="gate1">
            </el-option>
            <el-option
              label="gate2"
              value="gate2">
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
      startGate: ',',
      vehicle: 'a',
    };
  },
  methods: {
    findCar() {
      adminApi.vehicles.show({plate_number: this.plate_number})
      .then((resp) => {
        console.log(resp);
      }).catch((resp) => {
        console.log(resp);
      });
    },
    findRoad() {

    },
  },
};
</script>
