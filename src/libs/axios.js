import axios from 'axios'
import { baseURL } from '../config'
import { Message } from 'element-ui'
// import store from '../store'
import { getCookieToken } from './cookie'

// create an axios instance
export const axiosInstance = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // debugger
    // Do something before request is sent
    console.log(getCookieToken())
    if (getCookieToken()) {
      // 让每个请求携带token-- ['Authorization']为JWT的token
      // config.headers['Authorization'] = 'JWT ' + getToken()
      config.headers['Authorization'] = 'JWT ' + getCookieToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
