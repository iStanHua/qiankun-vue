// api/score.js

import { fetch } from '@/utils/axios'

/**
 * 编辑积分记录
 * @param {Number} data.id   编号
 * @param {Number} data.user_id   会员编号
 * @param {Number} data.value   值
 * @param {String} data.source   来源
 * @param {String} data.image   图片
 * @param {String} data.remark   备注
 * @param {Number} data.type   类型(1:收入,2:支出)
 */
export const EditScore = (data) => {
  if (data.id) {
    return fetch({ url: `/score/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/score/add', type: 'post', data })
  }
}

/**
 * 删除积分记录
 * @param {Number} id   编号
 */
export const DeleteScore = (id) => fetch({ url: `/score/delete/${id}`, type: 'post' })

/**
 * 积分记录列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const ScoreList = (data) => fetch({ url: '/score/list', type: 'get', data })

/**
 * 积分记录详情
 * @param {Number} id   编号
 */
export const ScoreDetail = (id) => fetch({ url: `/score/detail/${id}`, type: 'get' })
    