import Vue from 'vue'

import App from './App.vue'
import store from './store'

import startQiankun from './micro'

import './styles/base.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#main-app')

startQiankun()