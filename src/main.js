// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueConfig from 'vue-config';
import * as config from '@/config';
import 'normalize.css';
import Buefy from 'buefy';
import AsyncComputed from 'vue-async-computed';
// import 'buefy/lib/buefy.css';
// https://github.com/ecomfe/vue-echarts/blob/master/demo/Demo.vue
import ECharts from 'vue-echarts/components/ECharts';
import App from './App';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.use(vueConfig, config);
Vue.use(AsyncComputed);
Vue.component('ECharts', ECharts);
Vue.use(Buefy);

const app = new Vue({
  el: '#app',
  i18n,
  store, // this will inject the store instance to all child components.
  router,
  components: { App },
  template: '<App/>',
});

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = true;
  window.app = app;
  window.store = store;
}
