import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

const instance = axios.create({
  baseURL: BASE_URL
})

instance.interceptors.request.use((config) => {
  const token: string | null = localStorage.getItem('token')
  if (token !== '') {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
