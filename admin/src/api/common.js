// api/common.js

import { fetch } from '@/utils/axios'

/**
 * ip地址
*/
export const Ip = () => fetch({ url: '/common/ip', type: 'get' })

/**
 * ip地址归属地
 * @param {String} ip   ip地址
 */
export const IpAddress = (data) => fetch({ url: `/common/ip/address`, type: 'get', data })

/**
 * 号码归属地
 * @param {Number} mobile   手机号码
 */
export const PhoneArea = (data) => fetch({ url: `/common/phonearea`, type: 'get', data })

/**
 * 号码归属地
 * @param {Array} mobile   手机号码
 */
export const batchPhoneArea = (data) => fetch({ url: `/common/phonearea/batch`, type: 'post', data })
