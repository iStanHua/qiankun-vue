// src/axios.js

import axios from 'axios'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.withCredentials = true
    return config
  }, (err) => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use((response) => {
  console.log(response)
  if (response.status === 200) {
    return response.data
  }
  else {
    console.error(response.statusText ? response.statusText : '系统异常，请重试')
  }
  return Promise.reject(response.data)
}, (err) => {
  if (err) {
    console.error(response.statusText ? response.statusText : '系统异常，请重试')
  }
  else {
    console.error('系统异常，请重试')
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