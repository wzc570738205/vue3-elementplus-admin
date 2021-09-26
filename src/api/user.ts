/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-30 22:59:10
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 17:46:31
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: "/api/login/auth",
    method: "post",
    data,
  });
}

export function getInfo() {
  return request({
    url: "/api/user/getInfo",
    method: "get",
  });
}

export function logout() {
  return request({
    url: "/api/login/logout",
    method: "post",
  });
}

export function getAllRoles() {
  return request({
    url: "/api/user/getAllRoles",
    method: "get",
  });
}

export function getUserList(data) {
  return request({
    url: "/api/user/userList",
    method: "post",
    data,
  });
}
export function addUser(data) {
  return request({
    url: "/api/user/addUser",
    method: "post",
    data,
  });
}
export function updateUser(data) {
  return request({
    url: "/api/user/updateUser",
    method: "put",
    data,
  });
}
