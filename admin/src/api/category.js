// api/category.js

import { fetch } from '@/utils/axios'

/**
 * 编辑分类
 * @param {Number} data.id   编号
 * @param {Number} data.parent_id   父级编号
 * @param {String} data.name   名称
 */
export const EditCategory = (data) => {
  if (data.id) {
    return fetch({ url: `/category/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/category/add', type: 'post', data })
  }
}

/**
 * 删除分类
 * @param {Number} id   编号
 */
export const DeleteCategory = (id) => fetch({ url: `/category/delete/${id}`, type: 'post' })

/**
 * 分类列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const CategoryList = (data) => fetch({ url: '/category/list', type: 'get', data })

/**
 * 分类详情
 * @param {Number} id   编号
 */
export const CategoryDetail = (id) => fetch({ url: `/category/detail/${id}`, type: 'get' })
    