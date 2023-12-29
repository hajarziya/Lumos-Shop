import { IEditOrderApi, IEditProductApi, IOrdersApi } from '@src/api/interface'
import { UseMutationOptions, UseQueryOptions } from '@src/api/config/types'
import { useMutation, useQuery } from 'react-query'
import { fetchOrders, createOrder, editOrder } from './utils'
import { editProduct } from '@src/api/products/utils'

export const useOrders = (params: IOrdersApi['params'], options?: UseQueryOptions<typeof fetchOrders>) => {
  return useQuery(['useOrders', params], () => fetchOrders(params), options)
}

export const useCreateOrder = (options?: UseMutationOptions<typeof createOrder>) => {
  return useMutation({
    mutationFn: createOrder,
    ...options
  })
}

export const useOrderDetails = (params: IOrdersApi['params'], options?: UseQueryOptions<typeof fetchOrders>) => {
  return useQuery(['useOrders', params], () => fetchOrders(params), options)
}

export const useEditOrder = (params: IEditOrderApi['params'], options?: UseMutationOptions<typeof editOrder>) => {
  return useMutation({
    mutationFn: (data) => editOrder(data, { id: params.id }),
    ...options
  })
}
