import { IOrdersApi } from '@src/api/interface'
import { UseMutationOptions, UseQueryOptions } from '@src/api/config/types'
import { useMutation, useQuery } from 'react-query'
import { fetchOrders, createOrder } from './utils'

export const useOrders = (params: IOrdersApi['params'], options?: UseQueryOptions<typeof fetchOrders>) => {
  return useQuery(['useOrders', params], () => fetchOrders(params), options)
}

export const useCreateOrder = (options?: UseMutationOptions<typeof createOrder>) => {
  return useMutation({
    mutationFn: createOrder,
    ...options
  })
}
