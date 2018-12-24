import axios from 'axios'
import { baseURL } from '../config'
import { Message } from 'element-ui'
import store from '../store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // debugger
    // Do something before request is sent
    console.log(store.getters.token)
    if (store.getters.token) {
      // 让每个请求携带token-- ['Authorization']为JWT的token
      // config.headers['Authorization'] = 'JWT ' + getToken()
      config.headers['Authorization'] = 'JWT '
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
service.interceptors.response.use(
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

export default service
