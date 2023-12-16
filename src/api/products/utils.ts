import axios from '@src/api/config/axios'
import { IProductsApi, ICreateProductApi } from '@src/api/interface'

export const fetchProducts = (params: IProductsApi['params']) =>
  axios.get<IProductsApi['response']>('/products', {
    params: {
      limit: 4,
      ...params
    }
  })

export const deleteProduct = (id: string) =>
  axios.delete(`/products/${id}`)

export const createProduct = (data: ICreateProductApi['body']) =>
  axios.post<ICreateProductApi['response']>('/products', data)
