import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { fetchProducts } from '@src/api/products/utils'
import { IProductsApi } from '@src/api/interface'

export const useProducts = (
  params: IProductsApi['params'],
  options?: UseQueryOptions<typeof fetchProducts>
) => {
  return useQuery(
    ['useProducts', params],
    options
  )
}
