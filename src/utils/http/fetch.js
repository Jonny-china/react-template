import axios from 'axios'
import { Toast } from 'antd-mobile'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      const res = response.data
      if (res.code === '10000') {
        return res
      } else {
        Toast.fail(res.message || '数据丢到外太空了', 1.5)
        return Promise.reject(res)
      }
    } else {
      Toast.offline('网络错误，请稍后再试', 1.5)
      console.log(response)
      return Promise.reject(response)
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
