import { useMutation, useQuery } from 'react-query'
import { UseMutationOptions, UseQueryOptions } from '@src/api/config/types'
import { createProduct, deleteProduct, editProduct, fetchProductDetails, fetchProducts } from './utils'
import { IEditProductApi, IProductDetailsApi, IProductsApi } from '@src/api/interface'

export const useProducts = (params: IProductsApi['params'], options?: UseQueryOptions<typeof fetchProducts>) => {
  return useQuery(['useProducts', params], () => fetchProducts(params), options)
}

export const useDeleteProductMutation = (id: string, options?: UseMutationOptions<typeof deleteProduct>) => {
  return useMutation({
    mutationFn: () => deleteProduct(id),
    ...options
  })
}

export const useCreateProduct = (options?: UseMutationOptions<typeof createProduct>) => {
  return useMutation({
    mutationFn: (data) => createProduct(data),
    ...options
  })
}

export const useProductDetails = (params: IProductDetailsApi['params'], options?: UseQueryOptions<typeof fetchProductDetails>) => {
  return useQuery(['useProductDetails', params], () => fetchProductDetails(params), options)
}

export const useEditProduct = (params: IEditProductApi['params'], options?: UseMutationOptions<typeof editProduct>) => {
  return useMutation({
    mutationFn: (data) => editProduct(data, { id: params.id }),
    ...options
  })
}
