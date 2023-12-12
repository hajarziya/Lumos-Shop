import axios from '@src/api/config/axios'
import { IProductsApi } from '@src/api/interface'

export const fetchProducts = (params: IProductsApi['params']) =>
  axios.get<IProductsApi['response']>('/products', {
    params: {
      limit: 4,
      ...params
    }
  })

export const deleteProduct = (_id: string) =>
  axios.delete<IProductsApi['response']>(`/products/${_id}`)
