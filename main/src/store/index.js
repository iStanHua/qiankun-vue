// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

import { AUTH_TOKEN } from '@/utils/variable'

import router from '@/router'

Vue.use(Vuex)

const ls = new SecureLS({ isCompression: false })

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      }
    })
  ],
  state: {
    authToken: localStorage.getItem(AUTH_TOKEN) || '',
    // 用户信息
    userInfo: {},
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

      if (!!payload) localStorage.setItem(AUTH_TOKEN, payload)
      else Cookies.remove(AUTH_TOKEN)
    },

    /**
     * 设置用户信息
     */
    SET_USERINFO(state, payload) {
      state.userInfo = payload
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
      commit('SET_USERINFO', {})
      commit('SET_DICTIONARY', [])

      router.replace('/login')
    },

    /**
     * 过滤条件
     */
    setSearchStore({ commit }, payload) {
      commit('SET_SEARCH_STORE', payload)
    },

    /**
     * 字典
     */
    setDictionary({ commit }) {
      DictionaryList().then(res => {
        commit('SET_DICTIONARY', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
  }
})
