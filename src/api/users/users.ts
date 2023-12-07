import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { fetchUsers } from '@src/api/users/utils'
import { IUsersApi } from '@src/api/interface'

export const useUsers = (params: IUsersApi['params'], options?: UseQueryOptions<typeof fetchUsers>) => {
  return useQuery(['useUsers', params], () => fetchUsers(params), options)
}
