import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  method: 'POST',
  timeout: 20 * 1000
})

export default axiosInstance
