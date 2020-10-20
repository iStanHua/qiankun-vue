// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

import { AUTH_TOKEN } from '@/utils/variable'

import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    authToken: Cookies.get(AUTH_TOKEN) || '',
    // 用户信息
    userInfo: {},
    // 资源
    resourceList: [],
    // 过滤条件
    searchStore: {},
    // 字典
    dictionary: {}
  },
  mutations: {
    /**
     * 设置权限值
     */
    SET_AUTH_TOKEN(state, payload) {
      state.authToken = payload
      if (!!payload) {
        Cookies.set(AUTH_TOKEN, payload, { expires: 0.125 })
      }
      else {
        Cookies.remove(AUTH_TOKEN)
      }
    },

    /**
     * 设置用户信息
     */
    SET_USERINFO(state, payload) {
      state.userInfo = payload
    },

    /**
     * 设置资源
     */
    SET_RESOURCE(state, payload) {
      state.resourceList = payload
    },

    /**
     * 设置字典
     */
    SET_DICTIONARY(state, payload) {
      state.dictionary = payload
    },

    /**
     * 设置过滤条件
     */
    SET_SEARCH_STORE(state, payload) {
      state.searchStore = {}
      state.searchStore[payload.path] = payload.data || {}
    }
  },
  actions: {
    /**
     * 用户信息
     */
    fetchUserInfo({ commit }) {
      UserInfo().then(info => {
        commit('SET_USERINFO', info.data)
      }).catch(err => {
        console.log(err)
      })
    },

    /**
     * 退出登录
     */
    logout({ commit }) {
      commit('SET_AUTH_TOKEN', '')
      commit('SET_RESOURCE', [])
      commit('SET_DICTIONARY', [])
      commit('SET_USERINFO', {})
      router.replace('/login')
    },

    /**
     * 资源
     */
    setResource({ commit, state }) {
      ResourceAll().then(res => {
        commit('SET_RESOURCE', res.data)
      }).catch(err => {
        console.log(err)
      })
    },

    /**
     * 字典
     */
    setDictionary({ commit, state }) {
      DictionaryList().then(res => {
        commit('SET_DICTIONARY', res.data)
      }).catch(err => {
        console.log(err)
      })
    },

    /**
     * 过滤条件
     */
    setSearchStore({ commit }, payload) {
      commit('SET_SEARCH_STORE', payload)
    }
  }
})
