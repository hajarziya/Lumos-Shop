import axios from '@src/api/config/axios'
import { IOrdersApi } from '@src/api/interface'

export const fetchOrders = (params: IOrdersApi['params']) =>
  axios.get<IOrdersApi['response']>('/orders', {
    params: {
      limit: 5,
      ...params
    }
  })
