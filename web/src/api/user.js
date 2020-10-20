// api/user.js

import { fetch } from '@/utils/axios'


/**
 * 会员列表
 * @param {String} data.name    昵称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
 */
export const UserList = (data) => fetch({ url: '/user/list', type: 'get', data })

/**
 * 会员列表
 * @param {Number} id  编号
 */
export const UserDetail = (id) => fetch({ url: `/user/detail/${id}`, type: 'get' })

/**
 * 会员登录
 * @param {String} data.name    昵称
 * @param {Number} data.index   页码
 * @param {Number} data.size    每页显示记录数
 * @param {String} data.sort    排序方式(name-desc)
 */
export const Login = (data) => fetch({ url: '/user/login', type: 'post', data })

/**
 * 会员信息
 */
export const UserInfo = () => fetch({ url: '/user/info', type: 'get' })

/**
 * 添加会员
 * @param {String} data.name       名称
 * @param {String} data.tel        手机号码
 * @param {String} data.password   密码
 * @param {Number} data.balance    短信余额
 */
export const AddUser = (data) => fetch({ url: '/user/add', type: 'post', data })

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
