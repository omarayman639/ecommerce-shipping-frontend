import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import vaxios from 'vue-axios';
import vuetify from './plugins/vuetify';
//import {store} from './store'

Vue.config.productionTip = false
Vue.use(vaxios, axios);
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')