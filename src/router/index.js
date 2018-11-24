import Vue from 'vue';
import Router from 'vue-router';

// import store from '@/store';

import Login from '@/views/Login';
import Index from '@/views/Index';
import Dashboard from '@/views/Dashboard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
      ],
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
