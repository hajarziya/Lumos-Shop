import axios from '../config/axios'
import { IAuthLogin } from '@src/api/interface'

export const login = (data: IAuthLogin['payload']) => {
  return axios.post<IAuthLogin['response']>('/auth/login', data)
}
