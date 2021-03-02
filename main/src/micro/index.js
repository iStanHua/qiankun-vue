import { registerMicroApps, setDefaultMountApp, addGlobalUncaughtErrorHandler, start } from 'qiankun'
import NProgress from 'nprogress'

import 'nprogress/css/nprogress.css'

import apps from './apps'

export default (props = {}) => {
  // 注册子应用
  registerMicroApps(apps(props), {
    beforeLoad: (app) => {
      console.log(`beforeLoad app:`, app)

      NProgress.start()
      return Promise.resolve()
    },
    afterMount: (app) => {
      console.log(`afterMount app:`, app)

      NProgress.done()
      return Promise.resolve()
    }
  })

  // 设置默认进入的子应用
  setDefaultMountApp('/web')

  // 添加全局的未捕获异常处理器
  addGlobalUncaughtErrorHandler((event) => {
    const { message: msg } = event
    if (msg) console.error(msg)
  })

  start()
}
