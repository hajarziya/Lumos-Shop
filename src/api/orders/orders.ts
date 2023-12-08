import { IOrdersApi } from '@src/api/interface'
import { UseQueryOptions } from '@src/api/config/types'
import { useQuery } from 'react-query'
import { fetchOrders } from './utils'

export const useOrders = (params: IOrdersApi['params'], options?: UseQueryOptions<typeof fetchOrders>) => {
  return useQuery(['useOrders', params], () => fetchOrders(params), options)
}
