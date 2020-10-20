import Vue from 'vue'
import NProgress from "nprogress"
import { registerMicroApps, initGlobalState, setDefaultMountApp, start, addGlobalUncaughtErrorHandler, runAfterFirstMounted } from "qiankun"

import App from './App.vue'

import router from './router'
import store from './store'

import './registerServiceWorker'
import './utils/mrem'

import "nprogress/nprogress.css"
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
      el: "#app",
      router,
      store,
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

const loader = loading => render({ loading })

// Step2 注册子应用
registerMicroApps(
  [
    {
      name: 'web',
      entry: '//localhost:8081',
      container: '#app',
      activeRule: '/web',
      loader,
      props: {
        name: 'web',
      }
    },
    {
      name: 'admin',
      entry: '//localhost:8082',
      container: '#app',
      activeRule: '/admin',
      loader,
      props: {
        name: 'admin',
      }
    },
    {
      name: 'html',
      entry: '//localhost:8083',
      container: '#app',
      activeRule: '/html',
      loader,
      props: {
        name: 'html',
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