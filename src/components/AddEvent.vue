<template>
  <div class="add-event">
    <div class="container-fluid">
      <div class="row">

        <div class="col-12">
          <h1 class="text-center page__title--modal">Add an Event</h1>
        </div>

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

            <el-button type="primary mx-auto d-block" @click="submitForm('form1')">Submit</el-button>

          </el-form>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { required, integer } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      event: {
        name: '',
        width: 0,
        height: 0,
      },
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
};
</script>
