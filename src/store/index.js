import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    isAuthenticated: false,
  },
  getters: {
    isLogged(state) {
      return state.isAuthenticated;
    },
  },
  mutations: {
    clearAuthToken(state) {
      state.isAuthenticated = false;
    },
  },
});
