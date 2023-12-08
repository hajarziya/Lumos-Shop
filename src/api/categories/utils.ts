import axios from '@src/api/config/axios'
import { ICategoriesApi } from '@src/api/interface'

export const fetchCategories = (params: ICategoriesApi['params']) =>
  axios.get<ICategoriesApi['response']>('/categories', {
    params: {
      limit: 5,
      ...params
    }
  })
