import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { fetchCategories } from './utils'
import { ICategoriesApi } from '@src/api/interface'

export const useCategories = (params: ICategoriesApi['params'], options?: UseQueryOptions<typeof fetchCategories>) => {
  return useQuery(['useCategories', params], () => fetchCategories(params), options)
}
