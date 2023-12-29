import axios from '@src/api/config/axios'
import { IAddToCartApi, IEditOrderApi, IEditProductApi, IOrderDetails, IOrdersApi } from '@src/api/interface'

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

export const fetchOrderDetails = (params: IOrderDetails['params']) => {
  return axios.get<IOrderDetails['response']>('/orders', {

  })
}

export const editOrder = (data: IEditOrderApi['body'], params: IEditOrderApi['params']) =>
  axios.patch<IEditOrderApi['response']>(`/orders/${params.id}`, data)
