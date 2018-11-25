<template>
  <div class="add-vehicle">
    <div class="container">
      <div class="row">

        <div class="col-12">
          <h1 class="text-center page__title">Add a vehicle</h1>
        </div>

        <div class="col-12 col-md-8 offset-md-2 col-xl-4 offset-xl-4">

          <el-form ref="form" label-position="top" :model="vehicle" label-width="120px">
            <el-form-item label="Registration number" :class="{'error-show': $v.vehicle.plate_number.$error }">
              <el-input v-model="$v.vehicle.plate_number.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.plate_number.required">Field is required</div>
              <div class="error" v-if="!$v.vehicle.plate_number.alphaNum">Invalid registration number</div>
              <div class="error" v-if="!$v.vehicle.plate_number.minLength">
                Value must be at least 6 characters long</div>
              <div class="error" v-if="!$v.vehicle.plate_number.maxLength">
                Value can be at most 8 characters long</div>
            </el-form-item>

            <el-form-item label="Vehicle width in cm" :class="{'error-show': $v.vehicle.width.$error }">
              <el-input v-model="$v.vehicle.width.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.width.required">Field is required</div>
              <div class="error" v-if="!$v.vehicle.width.integer">Value must be a number</div>
            </el-form-item>

            <el-form-item label="Vehicle height in cm" :class="{'error-show': $v.vehicle.height.$error }">
              <el-input v-model="$v.vehicle.height.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.height.required">Field is required</div>
              <div class="error" v-if="!$v.vehicle.height.integer">Value must be a number</div>
            </el-form-item>

            <el-form-item label="Vehicle weight in kg" :class="{'error-show': $v.vehicle.weight.$error }">
              <el-input v-model="$v.vehicle.weight.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.weight.required">Field is required</div>
              <div class="error" v-if="!$v.vehicle.weight.integer">Value must be a number</div>
            </el-form-item>

            <el-button type="primary mx-auto d-block"
              @click="createVehicle()" :disabled="!(!$v.vehicle.$invalid)">Submit</el-button>

          </el-form>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import adminApi from '@/api/v1/admin';
import { required, integer, alphaNum, minLength, maxLength } from 'vuelidate/lib/validators';

import AddPlace from '@/components/AddPlace';

export default {
  components: {
    AddPlace,
  },
  data() {
    return {
      vehicle: {
        plate_number: '',
        width: 0,
        height: 0,
        weight: 0,
      },
    };
  },
  validations: {
    vehicle: {
      plate_number: {
        required,
        alphaNum,
        minLength: minLength(6),
        maxLength: maxLength(8),
      },
      width: {
        required,
        integer,
      },
      height: {
        required,
        integer,
      },
      weight: {
        required,
        integer,
      }
    },
  },
  methods: {
    createVehicle() {
      adminApi.vehicles.create(this.vehicle).then((resp) => {
        this.$message({
          message: 'Success!',
          type: 'success',
        });
        console.log(resp);
      }).catch((resp) => {
        this.$message({
          message: 'Error, try again!',
          type: 'warning',
        });
        console.log(resp);
      });
    },
  },
};
</script>
