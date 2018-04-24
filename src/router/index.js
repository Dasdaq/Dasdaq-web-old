import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import ExploreView from '@/components/ExploreView';
import ItemView from '@/components/ItemView';
import UserView from '@/components/UserView';
import NotFoundView from '@/views/NotFoundView';
import OnChainView from '@/views/OnChainView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'HomeView',
      path: '/',
      component: HomeView,
    },
    {
      name: 'ExploreView',
      path: '/explore',
      component: ExploreView,
    },
    {
      name: 'ItemView',
      path: '/item/:id(\\d+)',
      component: ItemView,
    },
    {
      name: 'UserView',
      path: '/user/:address',
      component: UserView,
    },
    {
      name: 'uploadToBlockchain',
      path: '/onChain',
      component: OnChainView,
    },
    {
      name: 'NotFoundView',
      path: '*',
      component: NotFoundView,
    },
  ],
});
