import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

// TODO : Configure Your Backend URL
axios.defaults.baseURL = "http://localhost:4000/";

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
