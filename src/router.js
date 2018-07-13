import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView';
import ExploreView from '@/components/ExploreView';
import ItemView from '@/components/ItemView';
import UserView from '@/components/UserView';
import NotFoundView from '@/views/NotFoundView';
import AirdropView from '@/views/AirdropView';

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
      name: 'Airdrop',
      path: '/airdrop',
      component: AirdropView,
    },    
    {
      name: 'NotFoundView',
      path: '*',
      component: NotFoundView,
    },
  ],
});
