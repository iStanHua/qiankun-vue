// api/template.js

import { fetch } from '@/utils/axios'

/**
 * 编辑模板
 * @param {Number} data.id   编号
 * @param {String} data.name   名称
 * @param {String} data.image   图片
 * @param {String} data.data   数据
 * @param {Number} data.fee   费用
 * @param {Number} data.category_id   分类编号
 * @param {Number} data.user_id   会员编号
 */
export const EditTemplate = (data) => {
  if (data.id) {
    return fetch({ url: `/template/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/template/add', type: 'post', data })
  }
}

/**
 * 删除模板
 * @param {Number} id   编号
 */
export const DeleteTemplate = (id) => fetch({ url: `/template/delete/${id}`, type: 'post' })

/**
 * 模板列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const TemplateList = (data) => fetch({ url: '/template/list', type: 'get', data })

/**
 * 模板详情
 * @param {Number} id   编号
 */
export const TemplateDetail = (id) => fetch({ url: `/template/detail/${id}`, type: 'get' })
    