<template>
  <div class="add-vehicle">
    <div class="container">
      <div class="row">
        
        <div class="col-12">
          <h1 class="text-center"></h1>
        </div>

        <div class="col-12 col-md-8 offset-md-2 col-xl-4 offset-xl-4">

          <el-form ref="form" label-position="top" :model="vehicle" label-width="120px">
            <el-form-item label="Numer Rejestracyjny pojazdu" :class="{'error-show': $v.vehicle.plateNumber.$error }">
              <el-input v-model="$v.vehicle.plateNumber.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.plateNumber.required">Pole jest wymagane</div>
              <div class="error" v-if="!$v.vehicle.plateNumber.alphaNum">Nieprawidłowy numer rejestracji</div>
              <div class="error" v-if="!$v.vehicle.plateNumber.minLength">Rejestracja musi mieć minimalnie 6 znaków</div>
              <div class="error" v-if="!$v.vehicle.plateNumber.maxLength">Rejestracja może mieć maksymalnie 8 znaków</div>
            </el-form-item>

            <el-form-item label="Szerokośc Pojazdu w cm" :class="{'error-show': $v.vehicle.width.$error }">
              <el-input v-model="$v.vehicle.width.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.width.required">Pole jest wymagane</div>
              <div class="error" v-if="!$v.vehicle.width.integer">Wartość musi być liczbą</div>
            </el-form-item>

            <el-form-item label="Długość pojazdu w cm" :class="{'error-show': $v.vehicle.height.$error }">
              <el-input v-model="$v.vehicle.height.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.height.required">Pole jest wymagane</div>
              <div class="error" v-if="!$v.vehicle.height.integer">Wartość musi być liczbą</div>
            </el-form-item>

            <el-button type="primary mx-auto d-block" @click="submitForm('ruleForm2')">Submit</el-button>

          </el-form>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { required, integer, alphaNum, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      vehicle: {
        plateNumber: 0,
        width: 0,
        height: 0,
      },
    };
  },
  validations: {
    vehicle: {
      plateNumber: {
        required,
        alphaNum,
        minLength: minLength(6),
        maxLength: maxLength(8),
      },
      width: {
        required,
        integer,
      },
      height:  {
        required,
        integer,
      },
    },
  },
};
</script>
