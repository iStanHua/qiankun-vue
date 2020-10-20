import Vue from 'vue'
import ToastVue from './toast.vue'

const ToastConstructor = Vue.extend(ToastVue)

const Toast = (options) => {
  if (Vue.prototype.$isServer) return

  options = options || {}
  if (typeof options === 'string') {
    options = { message: options }
  }
  options.show = true
  const instance = new ToastConstructor({
    data: options
  }).$mount()

  document.body.appendChild(instance.$el)

  return instance
}

Toast.install = (Vue) => {
  Vue.toast = Vue.prototype.$toast = Toast
}

export default Toast
export { Toast }