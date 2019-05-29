import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import fastClick from 'fastclick'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
