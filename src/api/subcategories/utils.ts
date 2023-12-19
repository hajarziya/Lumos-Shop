import axios from '@src/api/config/axios'
import { ISubCategoriesApi } from '@src/api/interface'

export const fetchSubCategories = (params: ISubCategoriesApi['params']) =>
  axios.get<ISubCategoriesApi['response']>('/subCategories', {
    params: {
      limit: 23,
      ...params
    }
  })
