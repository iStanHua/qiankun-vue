// api/role.js

import { fetch } from '@/utils/axios'

/**
 * 编辑角色
 * @param {Number} data.id   编号
 * @param {String} data.name   名称
 * @param {Number} data.parent_id   父级编号
 * @param {String} data.desc   描述
 * @param {String} data.auth   权限编号(多个用,分割)
 * @param {Number} data.business_id   商家编号
 */
export const EditRole = (data) => {
  if (data.id) {
    return fetch({ url: `/role/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/role/add', type: 'post', data })
  }
}

/**
 * 删除角色
 * @param {Number} id   编号
 */
export const DeleteRole = (id) => fetch({ url: `/role/delete/${id}`, type: 'post' })

/**
 * 角色列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const RoleList = (data) => fetch({ url: '/role/list', type: 'get', data })

/**
 * 角色列表
*/
export const RoleAll = () => fetch({ url: '/role/all', type: 'get' })

/**
 * 角色详情
 * @param {Number} id   编号
 */
export const RoleDetail = (id) => fetch({ url: `/role/detail/${id}`, type: 'get' })
