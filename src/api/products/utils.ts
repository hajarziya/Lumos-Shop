import axios from '@src/api/config/axios'
import { IProductsApi, ICreateProduct } from '@src/api/interface'

export const fetchProducts = (params: IProductsApi['params']) =>
  axios.get<IProductsApi['response']>('/products', {
    params: {
      limit: 4,
      ...params
    }
  })

export const deleteProduct = (id: string) =>
  axios.delete(`/products/${id}`)

export const createProduct = (data: ICreateProduct['body']) =>
  axios.post<ICreateProduct['response']>('/products', data)
