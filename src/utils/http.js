import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  method: 'POST',
  timeout: 20 * 1000
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.setContentType('application/json')
  config.headers.setContentEncoding('UTF-8')
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axiosInstance
