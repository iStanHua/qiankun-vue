// utils/axios.js

import axios from 'axios'
import { Message } from 'element-ui'

import { API_BASE_URL } from '@/utils/variable'

import store from '@/store'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.authToken)
      config.headers.common['Authorization'] = 'Bearer ' + store.state.authToken

    config.withCredentials = true
    return config
  }, (err) => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use((response) => {
  if (response.data.code === 200) {
    return response.data
  }
  // token 已过期，重定向到登录页面
  else if (response.data.code == 401) {
    Message.error(response.data.msg)
    setTimeout(() => {
      store.dispatch('logout')
    }, 500)
  }
  else {
    Message.error(response.data && response.data.msg ? response.data.msg : '系统异常，请重试')
  }
  return Promise.reject(response.data)
}, (err) => {
  if (err) {
    Message.error(err.response.statusText ? err.response.statusText : '系统异常，请重试')
  }
  else {
    Message.error('系统异常，请重试')
  }
  return Promise.reject(err)
})

/**
 * 请求
 * @param {String} options.url    地址
 * @param {String} options.type   类型
 * @param {Object} options.data   数据
 */
export const fetch = (options = {}) => {
  options.url && options.url.indexOf('/api/') === -1 && (options.url = API_BASE_URL + options.url)

  if (options.type) {
    options.method = String(options.type).toUpperCase()
    delete options.type
  }

  if (options.method === 'GET') {
    options.params = options.data
    delete options.data
  }

  if (Object.prototype.toString.call(options.data) === '[object FormData]')
    options.headers = Object.assign({}, options.headers, { 'Content-Type': `multipart/form-data; boundary=----WebKitFormBoundary${new Date().getTime()}` })

  return axios(options)
}