<template>
  <div class="add-place">
    <div class="container-fluid">
      <div class="row">

        <div class="col-12">
          <h1 class="text-center">Add a Place</h1>
        </div>

        <div class="col-12 col-xl-10 offset-xl-1">

          <el-form ref="form2" label-position="top" :model="place" label-long="120px">
            <el-form-item label="Name of the place" :class="{'error-show': $v.place.name.$error }">
              <el-input v-model="$v.place.name.$model"></el-input>
              <div class="error" v-if="!$v.place.name.required">Field is required</div>
            </el-form-item>

            <el-form-item label="Longitude" :class="{'error-show': $v.place.long.$error }">
              <el-input v-model="$v.place.long.$model"></el-input>
              <div class="error" v-if="!$v.place.long.required">Field is required</div>
              <div class="error" v-if="!$v.place.long.decimal">Value must be a decimal number</div>
            </el-form-item>

            <el-form-item label="Latitude"
            :class="{'error-show': $v.place.lat.$error }">
              <el-input v-model="$v.place.lat.$model"></el-input>
              <div class="error" v-if="!$v.place.lat.required">Field is required</div>
              <div class="error" v-if="!$v.place.lat.decimal">Value must be a decimal number</div>
            </el-form-item>

            <el-button type="primary mx-auto d-block" @click="submitForm('form2')">Submit</el-button>

          </el-form>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { required, decimal } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      place: {
        name: '',
        long: 0,
        lat: 0,
      },
    };
  },
  validations: {
    place: {
      name: {
        required,
      },
      long: {
        required,
        decimal,
      },
      lat: {
        required,
        decimal,
      },
    },
  },
};
</script>
