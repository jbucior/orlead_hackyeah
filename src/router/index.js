import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/Login';
import Index from '@/views/Index';
import Statistics from '@/views/Dashboard';
import AddVehicle from '@/views/AddVehicle';
import Map from '@/views/Map';
import Road from '@/views/Road';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/add-vehicle',
      name: 'add-vehicle',
      component: AddVehicle,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/check-road',
      name: 'road',
      component: Road,
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
//
// router.beforeEach((to, from, next) => {
//   // Check if entered route needs authentication, then check if user is logged in
//   if (!to.matched.some(record => record.meta.public)) {
//     if (!store.getters.isLogged) {
//       next({
//         name: 'login',
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
