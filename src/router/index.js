import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import ItemView from '@/views/ItemView';
import NotFoundView from '@/views/NotFoundView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'HomeView',
      path: '/',
      component: HomeView,
    },
    {
      name: 'ItemView',
      path: '/item/:id(\\d+)',
      component: ItemView,
    },
    {
      name: 'NotFoundView',
      path: '*',
      component: NotFoundView,
    },
  ],
});
