// api/history.js

import { fetch } from '@/utils/axios'

/**
 * 编辑登录记录
 * @param {Number} data.id   编号
 * @param {Number} data.user_id   会员编号
 * @param {String} data.ip   IP地址
 * @param {String} data.address   地址
 * @param {String} data.operators   运营商
 * @param {String} data.device   设备信息
 * @param {String} data.agent   用户代理
 */
export const EditHistory = (data) => {
  if (data.id) {
    return fetch({ url: `/history/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/history/add', type: 'post', data })
  }
}

/**
 * 删除登录记录
 * @param {Number} id   编号
 */
export const DeleteHistory = (id) => fetch({ url: `/history/delete/${id}`, type: 'post' })

/**
 * 登录记录列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const HistoryList = (data) => fetch({ url: '/history/list', type: 'get', data })

/**
 * 登录记录详情
 * @param {Number} id   编号
 */
export const HistoryDetail = (id) => fetch({ url: `/history/detail/${id}`, type: 'get' })
    