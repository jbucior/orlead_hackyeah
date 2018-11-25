<template>
  <div class="add-vehicle">
    <div class="container">
      <div class="row">

        <div class="col-12">
          <h1 class="text-center">Add a vehicle</h1>
        </div>

        <div class="col-12 col-md-8 offset-md-2 col-xl-4 offset-xl-4">

          <el-form ref="form" label-position="top" :model="vehicle" label-width="120px">
            <el-form-item label="Registration number" :class="{'error-show': $v.vehicle.plateNumber.$error }">
              <el-input v-model="$v.vehicle.plateNumber.$model"></el-input>
              <div class="error" v-if="!$v.vehicle.plateNumber.required">Field is required</div>
              <div class="error" v-if="!$v.vehicle.plateNumber.alphaNum">Invalid registration number</div>
              <div class="error" v-if="!$v.vehicle.plateNumber.minLength">
                Value must be at least 6 characters long</div>
              <div class="error" v-if="!$v.vehicle.plateNumber.maxLength">
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

            <el-button type="primary mx-auto d-block" @click="submitForm('form')">Submit</el-button>

          </el-form>

          <b-btn v-b-modal.modal1>modal add Event</b-btn>

          <!-- Modal Component -->
          <b-modal id="modal1" title="ADD AN EVENT" :hide-footer="true">
            <add-event></add-event>
          </b-modal>

          <b-btn v-b-modal.modal2>modal add Place</b-btn>

          <!-- Modal Component -->
          <b-modal id="modal2" title="ADD A PLACE" :hide-footer="true">
            <add-place></add-place>
          </b-modal>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { required, integer, alphaNum, minLength, maxLength } from 'vuelidate/lib/validators';
import AddEvent from '@/components/AddEvent';
import AddPlace from '@/components/AddPlace';

export default {
  components: {
    AddEvent,
    AddPlace,
  },
  data() {
    return {
      vehicle: {
        plateNumber: '',
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
      height: {
        required,
        integer,
      },
    },
  },
};
</script>
