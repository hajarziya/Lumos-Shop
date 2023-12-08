import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { fetchSubCategories } from './utils'
import { ISubCategoriesApi } from '@src/api/interface'

export const useSubCategories = (params: ISubCategoriesApi['params'], options?: UseQueryOptions<typeof fetchSubCategories>) => {
  return useQuery(['useSubCategories', params], () => fetchSubCategories(params), options)
}
