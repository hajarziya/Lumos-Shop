import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { fetchUsers } from '@src/api/users/utils'

export const useUsers = (options?: UseQueryOptions<typeof fetchUsers>) => {
  return useQuery('useUsers', fetchUsers, options)
}
