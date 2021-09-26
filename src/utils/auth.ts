/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-06-16 14:13:55
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 15:45:43
 */
import Cookies from 'js-cookie'

const TokenKey = 'Authtoken'
const RefreshTokenKey = 'Authtoken_refresh'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setRefreshToken(token) {
  return Cookies.set(RefreshTokenKey, token)
}

export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey)
}
