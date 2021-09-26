/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 15:42:23
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 18:23:48
 */
/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-06-16 14:13:55
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-30 17:36:13
 */
import axios from 'axios'
// import { Message } from 'element-ui'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import {
  getToken,
  setToken,
  setRefreshToken,
  getRefreshToken
} from '@/utils/auth'

import { ElLoading } from 'element-plus'
import _ from 'lodash'

// loading对象
let loading

// 当前正在请求的数量
let needLoadingRequestCount = 0

// 显示loading
function showLoading(target) {
  // 后面这个判断很重要，因为关闭时加了抖动，此时loading对象可能还存在，
  // 但needLoadingRequestCount已经变成0.避免这种情况下会重新创建个loading
  if (needLoadingRequestCount === 0 && !loading) {
    loading = ElLoading.service({
      lock: true,
      text: '加载中...',
      background: 'rgba(255, 255, 255, 0.5)',
      target: target || 'body'
    })
  }
  needLoadingRequestCount++
}

// 隐藏loading
function hideLoading() {
  needLoadingRequestCount--
  needLoadingRequestCount = Math.max(needLoadingRequestCount, 0)
  if (needLoadingRequestCount === 0) {
    // 关闭loading
    toHideLoading()
  }
}

// 防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
// eslint-disable-next-line no-var
var toHideLoading = _.debounce(() => {
  if (loading) {
    loading.close()
    loading = null
  }
}, 300)

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 600000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // 判断当前请求是否设置了不显示Loading
    if (config.headers.showLoading !== false) {
      showLoading(config.headers.loadingTarget)
    }
    if (useUserStore().getToken) {
      console.log('store.getters.token: ', useUserStore().getToken)
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  (error) => {
    // do something with request error
    hideLoading()
    return Promise.reject(error)
  }
)

export interface Result<T = any> {
    code: number;
    isSuccess: Boolean;
    message: string;
    data: T;
  }
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    if (response.config.headers.showLoading !== false) {
      hideLoading()
    }
    const res:Result = response.data
    return res
  },

  (error) => {
    hideLoading()
    const status = error.response ? error.response.status : null

    // return Promise.reject(error)
    if (status !== 401) {
      // Message({
      //   message: error.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(error)
    }

    /*
     *当响应码为 401 时，尝试刷新令牌。
     *弹出拦截器，以防万一它不会循环
     *令牌刷新导致 401 响应
     */
    return axios
      .post(
        '/api/login/refresh',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + getRefreshToken()
          }
        }
      )
      .then(async(response) => {
        const data = response.data.data
        setToken(data.token)
        setRefreshToken(data.refreshToken)
        error.response.config.headers['Authorization'] = 'Bearer ' + data.token
        return await axios(error.response.config).then((res) => res.data)
      })
      .catch((error) => {
        useUserStore().resetToken
        const router = useRouter()
        router.push('/login')
        return Promise.reject(error)
      })
  }
)

export default service
