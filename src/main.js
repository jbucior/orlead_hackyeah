// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import QuillEditor from 'vue-quill-editor';
import Vuelidate from 'vuelidate';
import PulseLoader from 'vue-spinner/src/PulseLoader';
import Alert from '@/components/Alert';

import App from './App';
import router from './router';
import store from './store';
import Filters from './filters';

Vue.config.productionTip = false;

Vue.use(Filters);
Vue.use(Vuelidate);
Vue.use(ElementUI, { locale });
Vue.use(BootstrapVue);
Vue.use(QuillEditor);

Vue.component('pulse-loader', PulseLoader);
Vue.component('alert', Alert);

// Axios
axios.defaults.baseURL = `${process.env.SERVER_URL}/api/v1`;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
