// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueConfig from 'vue-config';
import config from '@/config';
import 'normalize.css';
import App from './App';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;

Vue.use(vueConfig, config);

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
