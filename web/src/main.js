import Vue from 'vue'

import App from './App.vue'

import routes from './router'
import store from './store'

import './public-path'
import './registerServiceWorker'
import './utils/mrem'
import './styles/base.scss'

import Wrapper from './components/common/wrapper/index.vue'

Vue.component('Wrapper', Wrapper)

Vue.config.productionTip = false

let instance = null

function render(props = {}) {
  const { container, routerBase } = props

  const router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes: routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  render()
}

// function storeTest(props) {
//   props.onGlobalStateChange && props.onGlobalStateChange((value, prev) =>
//     console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true)

//   props.setGlobalState &&
//     props.setGlobalState({
//       ignore: props.name,
//       user: {
//         name: props.name,
//       }
//     })
// }

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)

  // storeTest(props)

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}