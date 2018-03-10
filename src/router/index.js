import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import NotFoundView from '@/views/NotFoundView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '*',
      name: 'NotFoundView',
      component: NotFoundView,
    },
  ],
});
