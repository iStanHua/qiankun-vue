import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import startQiankun from './micro'

import './styles/base.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app-main')

startQiankun()