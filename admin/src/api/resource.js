// api/resource.js

import { fetch } from '@/utils/axios'

/**
* 编辑资源
 * @param {Number} data.id         编号
 * @param {String} data.name       名称
 * @param {Number} data.parent_id  父级编号
 * @param {String} data.icon       图标
 * @param {String} data.route      路由
 * @param {Number} data.type       类型(1:目录,2:菜单,3:按钮)
 * @param {String} data.power      权限
 * @param {Number} data.sort       排序
 * @param {Number} data.public     是否公开(1:是,2:否)
*/
export const EditResource = (data) => {
  if (data.id) {
    return fetch({ url: `/resource/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/resource/add', type: 'post', data })
  }
}

/**
 * 删除资源
 * @param {Number} id   编号
 */
export const DeleteResource = (id) => fetch({ url: `/resource/delete/${id}`, type: 'post' })

/**
 * 资源列表
 * @param {String} parent_id  父级编号
 */
export const ResourceAll = (parent_id) => fetch({ url: '/resource/all', type: 'get', data: parent_id != undefined ? { parent_id } : {} })

/**
 * 会员列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
 */
export const ResourceList = (data) => fetch({ url: '/resource/list', type: 'get', data })

/**
 * 资源详情
 * @param {Number} id   编号
 */
export const ResourceDetail = (id) => fetch({ url: `/resource/detail/${id}`, type: 'get' })

/**
 * 会员菜单
 */
export const UserMenu = () => fetch({ url: '/resource/menu', type: 'get' })