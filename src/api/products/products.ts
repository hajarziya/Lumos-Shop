import { useMutation, useQuery } from 'react-query'
import { UseMutationOptions, UseQueryOptions } from '@src/api/config/types'
import { deleteProduct, fetchProducts } from './utils'
import { IProductsApi } from '@src/api/interface'

export const useProducts = (params: IProductsApi['params'], options?: UseQueryOptions<typeof fetchProducts>) => {
  return useQuery(['useProducts', params], () => fetchProducts(params), options)
}

export const useDeleteProductMutation = (id: string, options?: UseMutationOptions<typeof deleteProduct>) => {
  return useMutation({
    mutationFn: () => deleteProduct(id),
    ...options
  })
}
