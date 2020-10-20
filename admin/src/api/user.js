// api/user.js

import { fetch } from '@/utils/axios'

/**
 * 编辑用户
 * @param {Number} data.id   编号
 * @param {Number} data.parent_id   父级编号
 * @param {String} data.name   名称
 * @param {String} data.avatar   头像
 * @param {String} data.tel   手机号码
 * @param {Number} data.bind_tel   是否绑定手机号码
 * @param {String} data.email   邮箱
 * @param {Number} data.bind_email   是否绑定邮箱
 * @param {String} data.password   密码
 * @param {String} data.secret   密钥
 * @param {Number} data.score   积分
 * @param {String} data.wxid   微信openid
 * @param {String} data.ip   最后登录IP地址
 * @param {Number} data.type   类型(1:普通会员,2:VIP会员,3:超级管理员)
 */
export const EditUser = (data) => {
  if (data.id) {
    return fetch({ url: `/user/update/${data.id}`, type: 'post', data })
  }
  else {
    data.hasOwnProperty('id') && (delete data.id)
    return fetch({ url: '/user/add', type: 'post', data })
  }
}

/**
 * 删除用户
 * @param {Number} id   编号
 */
export const DeleteUser = (id) => fetch({ url: `/user/delete/${id}`, type: 'post' })

/**
 * 用户列表
 * @param {String} data.name    名称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
*/
export const UserList = (data) => fetch({ url: '/user/list', type: 'get', data })

/**
 * 用户详情
 * @param {Number} id   编号
 */
export const UserDetail = (id) => fetch({ url: `/user/detail/${id}`, type: 'get' })


/**
 * 会员登录
 * @param {String} data.tel        手机号码
 * @param {String} data.password   密码
 */
export const Login = (data) => fetch({ url: '/user/login', type: 'post', data })

/**
 * 会员信息
 */
export const UserInfo = () => fetch({ url: '/user/info', type: 'get' })

/**
 * 修改会员密码
 * @param {String} data.old_password 原密码
 * @param {String} data.password     新密码
 */
export const UpdatePassword = (data) => fetch({ url: '/user/password/update', type: 'post', data })

/**
 * 重置会员密码
 * @param {Number} id  编号
 */
export const ResetPassword = (id) => fetch({ url: `/user/password/reset/${id}`, type: 'post' })

/**
 * 修改会员头像
 * @param {Number} data.avatar  头像地址
 */
export const UpdateAvatar = (data) => fetch({ url: '/user/update/avatar', type: 'post', data })

