import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { fetchSubCategories } from './utils'
import { ICategoriesApi } from '@src/api/interface'

export const useCategories = (params: ICategoriesApi['params'], options?: UseQueryOptions<typeof fetchSubCategories>) => {
  return useQuery(['useSubCategories', params], () => fetchSubCategories(params), options)
}
