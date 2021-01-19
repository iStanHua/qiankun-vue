// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

let routes = []
const routeCtx = require.context('./modules', true, /\.js$/i)

routeCtx.keys().forEach(key => {
  routeCtx(key).default.forEach(c => {
    routes.push(c)
  })
})

routes.push({
  path: '/about',
  component: () => import('@/views/about.vue'),
})


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router