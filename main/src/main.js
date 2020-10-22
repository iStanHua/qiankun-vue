import Vue from 'vue'
import NProgress from 'nprogress'
import { registerMicroApps, initGlobalState, setDefaultMountApp, start, addGlobalUncaughtErrorHandler, runAfterFirstMounted } from 'qiankun'

import App from './App.vue'

import router from './router'
import store from './store'

import './registerServiceWorker'
import './utils/mrem'

import 'nprogress/nprogress.css'
import './styles/base.scss'

import Wrapper from './components/common/wrapper/index.vue'

Vue.component('Wrapper', Wrapper)

Vue.config.productionTip = false

let app = null

/**
 * 渲染函数
 * loading 子应用加载效果，可选
 */
function render({ loading } = {}) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      data() {
        return {
          loading
        }
      },
      render(h) {
        return h(App, {
          props: {
            loading: this.loading
          }
        })
      }
    })
  } else {
    app.loading = loading
  }
}

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

// Step1 初始化应用（可选）
render({ loading: true })

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader(loading) {
  if (app && app.$children) {
    // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
    app.$children[0].isLoading = loading
  }
}

// Step2 注册子应用
registerMicroApps(
  [
    {
      name: 'web',
      entry: process.env.VUE_APP_WEB,
      container: '#app',
      activeRule: genActiveRule('/web'),
      loader,
      props: {
        // 下发基础路由
        routerBase: '/web',
        // 下发getGlobalState方法
        getGlobalState: store.getGlobalState
      }
    },
    {
      name: 'admin',
      entry: process.env.VUE_APP_ADMIN,
      container: '#app',
      activeRule: genActiveRule('/admin'),
      loader,
      props: {
        // 下发基础路由
        routerBase: '/admin',
        // 下发getGlobalState方法
        getGlobalState: store.getGlobalState
      }
    },
    {
      name: 'html',
      entry: process.env.VUE_APP_HTML,
      container: '#app',
      activeRule: genActiveRule('/html'),
      loader,
      props: {
        // 下发基础路由
        routerBase: '/html',
        // 下发getGlobalState方法
        getGlobalState: store.getGlobalState
      }
    }
  ],
  {
    beforeLoad: (app) => {
      console.log('before load', app.name)
      NProgress.start()
      return Promise.resolve()
    },
    afterMount: (app) => {
      console.log('after mount', app.name)
      NProgress.done()
      return Promise.resolve()
    }
  },
)

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
})

onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('[onGlobalStateChange - master]:', state, prev)
})

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
})

// Step3 设置默认进入的子应用
// setDefaultMountApp('/web')

// Step4 启动应用
start()

addGlobalUncaughtErrorHandler((event) => {
  const { message: msg } = event
  if (msg) console.error(msg)
})

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted')
})