<template>
  <section class="login">
    <div class="container">
      <div class="row">
        <div class="col-12 login__container">
          <h1 class="login__header">
            Admin Login
          </h1>
          <form class="login__form" @submit.prevent="login">
            <div class="input-container" :class="{'error-show': $v.admin.username.$error }">
              <input type="text" autocomplete="home email" name="email" class="input input--icon"
                placeholder="E-mail" v-model.trim="$v.admin.username.$model">
              <div class="error" v-if="!$v.admin.username.required">Field is required</div>
            </div>

            <div class="input-container" :class="{'error-show': $v.admin.password.$error }">
              <input type="password" name="password" class="input input--icon input--password"
                placeholder="Password" v-model="$v.admin.password.$model">
              <div class="error" v-if="!$v.admin.password.required">Field is required</div>
              <div class="error" v-if="!$v.admin.password.minLength">
                Password must have at least {{$v.admin.password.$params.minLength.min}} letters.
              </div>
            </div>

            <button class="button mt-3 button--centered"
              :disabled="$v.admin.password.$invalid || $v.admin.username.$invalid || processing">
              <span v-if="!processing">LOG IN</span>
              <pulse-loader :loading="processing" :color="'white'" :size="'12px'"></pulse-loader>
            </button>
          </form>

          <div class="login__errors">
            <alert :alert='alert' :errors='errors'/>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import alert from '@/mixins/alert';

export default {
  name: 'login',
  mixins: [alert],
  data() {
    return {
      admin: {
        username: '',
        password: '',
      },
      processing: false,
    };
  },
  validations: {
    admin: {
      username: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    login() {
      this.clearAlerts();
      this.processing = true;
      this.$store.dispatch('loginAdmin', this.admin)
        .then(() => {
          this.$router.push({ name: 'dashboard' });
        }).catch((resp) => {
          if (resp.errors) {
            this.errors = resp.errors;
            this.processing = false;
          }
        });
    },
  },
};
</script>

<style scoped>
 .login {
   margin-top: 100px;
 }
</style>
