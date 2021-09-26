/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 15:41:49
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 18:29:22
 */

import { defineStore } from 'pinia'
import { store } from '@/store'
import {
  getToken,
  setToken,
  removeToken,
  setRefreshToken
} from '@/utils/auth'
import { login, logout, getInfo } from '@/api/user'

interface UserState {
  token: string;
  name: string;
  avatar: string;
  userId: Number | null;
  nickname: string;
}

const state: UserState = {
  // token
  token: getToken(),
  name: '',
  avatar: '',
  userId: null,
  nickname: '2342424'
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => state,
  getters: {
    getToken(): string {
      return this.token || getToken()
    },
    getName(): string {
      return this.name
    },
    getUserId(): Number | null {
      return this.userId
    },
    getNickname(): string {
      return this.nickname
    },
    getAvatar(): string {
      return this.avatar
    }
  },
  actions: {
    RESET_STATE: (state) => {
      Object.assign(state, state)
    },
    SET_TOKEN(token) {
      this.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USER_info: (state, userInfo) => {
      state.avatar = userInfo.avatar || require('@/assets/images/user.png')
      state.nickname = userInfo.nickname
    },
    SET_USER: (state, userInfo) => {
      state.avatar = userInfo.avatar || require('@/assets/images/user.png')
      state.nickname = userInfo.nickname
      state.userId = userInfo.id
      state.role = userInfo.roleName
      state.menus = userInfo.menuList
    },
    RESET_USER: (state) => {
      state.nickname = ''
      state.avatar = require('@/assets/images/user.png')
      state.userId = ''
      state.role = ''
      state.menus = []
    },
    login(userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // commit('SET_TOKEN', 'data.token')
        // setToken('data.token')
        // resolve()
        login({ username: username.trim(), password: password })
          .then((res: any) => {
            console.log('response: ', res)
            const { data, isSuccess } = res
            if (isSuccess) {
              this.SET_TOKEN(data.token)
              setToken(data.token)
              setRefreshToken(data.refreshToken)
              resolve(res)
            } else {
              reject(res)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((response) => {
            const { data } = response
            console.log('data: ', data)

            if (!data) {
              return reject('Verification failed, please Login again.')
            }

            commit('SET_USER', data)

            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // user logout
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            commit('RESET_USER')
            resolve('')
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // remove token
    resetToken({ commit }) {
      return new Promise((resolve) => {
        removeToken() // must remove  token  first
        commit('RESET_STATE')
        commit('RESET_USER')
        resolve('')
      })
    }
  }
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}
