import axios from '../config/axios'
import { type AuthLogin } from '@src/api/interface'

export const login = (data: AuthLogin['payload']) => {
  return axios.post<AuthLogin['response']>('/auth/login', data)
}
