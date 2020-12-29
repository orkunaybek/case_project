import Vue from 'vue';
import App from './App.vue';
import { router } from '@/router';
import { i18n } from '@/i18n';
import { store } from '@/store'
import 'reset-css';

new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store
}).$mount('#app');
