import { useQuery } from 'react-query'
import { UseQueryOptions } from '@src/api/config/types'
import { deleteProduct, fetchProducts } from './utils'
import { IProductsApi } from '@src/api/interface'

export const useProducts = (params: IProductsApi['params'], options?: UseQueryOptions<typeof fetchProducts>) => {
  return useQuery(['useProducts', params], () => fetchProducts(params), options)
}

export const useDeleteProduct = () => {
  return async (_id: string) => {
    await deleteProduct(_id)
  }
}
