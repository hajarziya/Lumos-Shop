import axios from '../config/axios'
import { IAuthLogin, IAuthSignUp } from '@src/api/interface'

export const login = (data: IAuthLogin['payload']) => {
  return axios.post<IAuthLogin['response']>('/auth/login', data)
}

export const signup = (data: IAuthSignUp['payload']) => {
  return axios.post<IAuthSignUp['response']>('/auth/signup', data)
}
