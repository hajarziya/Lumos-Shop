import axios from '../config/axios'
import { IAuthLogin, IAuthSginUp } from '@src/api/interface'

export const login = (data: IAuthLogin['payload']) => {
  return axios.post<IAuthLogin['response']>('/auth/login', data)
}

export const signup = (data: IAuthSginUp['payload']) => {
  return axios.post<IAuthSginUp['response']>('/auth/signup', data)
}
