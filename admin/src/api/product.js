// api/product.js

import { fetch } from '@/utils/axios'

/**
 * 编辑模板
 * @param {Number} data.id   编号
 * @param {String} data.name   名称
 * @param {String} data.data   数据
 * @param {Number} data.template_id   模板编号
 * @param {Number} data.user_id   会员编号
 */
export const EditProduct = (data) => {
  if (data.id) {
    return fetch({ url: `/product/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/product/add', type: 'post', data })
  }
}

/**
 * 删除模板
 * @param {Number} id   编号
 */
export const DeleteProduct = (id) => fetch({ url: `/product/delete/${id}`, type: 'post' })

/**
 * 模板列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const ProductList = (data) => fetch({ url: '/product/list', type: 'get', data })

/**
 * 模板详情
 * @param {Number} id   编号
 */
export const ProductDetail = (id) => fetch({ url: `/product/detail/${id}`, type: 'get' })
    