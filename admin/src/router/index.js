// router/index.js

import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import { REDIRECT_URL } from '@/utils/variable'

import AdminLayout from '@/components/layout/admin.vue'

import HomePage from '@/views/index.vue'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(Router)

let _routes = []
const _routesCtx = require.context('./modules', true, /\.js$/i)

_routesCtx.keys().forEach(key => {
  _routesCtx(key).default.forEach(d => {
    _routes.push(d)
  })
})

console.log(window.__POWERED_BY_QIANKUN__ )

_routes.push({
  path: '/',
  component: AdminLayout,
  children: [
    {
      path: '',
      meta: {
        title: '首页',
        auth: true
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

const router = new Router({
  mode: 'history',
  base: '/admin/',
  routes: _routes
})


router.beforeEach((to, from, next) => {
  if (to.params.type === 'add') {
    document.title = `新增${to.meta.title}`
  }
  else if (to.params.type === 'update') {
    document.title = `修改${to.meta.title}`
  }
  else if (to.params.type === 'view') {
    document.title = `查看${to.meta.title}详情`
  }
  else {
    document.title = to.meta.title
  }

  // if (to.meta.auth && !store.state.authToken) {
  //   localStorage.setItem(REDIRECT_URL, to.path)
  //   next('/login')
  // }
  // else {
  //   if (to.path === '/login') {
  //     localStorage.setItem(REDIRECT_URL, from.path)
  //   }
  //   next()
  // }
  
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router