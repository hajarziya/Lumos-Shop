import axios from '@src/api/config/axios'
import { IUsersApi } from '@src/api/interface'

export const fetchUsers = (params: IUsersApi['params']) => axios.get<IUsersApi['response']>('/users', {
  params: {
    limit: 5,
    ...params
  }
})
