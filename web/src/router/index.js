// router/index.js

import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout/index.vue'

import HomePage from '@/views/home.vue'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(Router)

let routes = []
const routeCtx = require.context('./modules', true, /\.js$/i)

routeCtx.keys().forEach(key => {
  routeCtx(key).default.forEach(c => {
    routes.push(c)
  })
})

routes.push({
  path: '/',
  component: Layout,
  children: [
    {
      path: '',
      meta: {
        title: '首页',
        alive: true,
        fixed: true
      },
      component: HomePage
    },
    // {
    //   path: 'auth',
    //   meta: {
    //     title: '没有访问权限'
    //   },
    //   component: () => import('@/views/common/auth.vue')
    // },
    // {
    //   path: '*',
    //   meta: {
    //     title: '页面不存在'
    //   },
    //   component: () => import('@/views/common/notFound.vue')
    // }
  ]
})


export default routes