import axios from '@src/api/config/axios'
import { IAddToCartApi, IOrdersApi } from '@src/api/interface'

export const fetchOrders = (params: IOrdersApi['params']) =>
  axios.get<IOrdersApi['response']>('/orders', {
    params: {
      limit: 5,
      ...params
    }
  })

export const createOrder = (data: IAddToCartApi['payload']) => {
  return axios.post<IAddToCartApi['response']>('/orders', data)
}
