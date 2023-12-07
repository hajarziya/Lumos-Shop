interface IApiResponse<T> {
  status: string
  data: T
  page?: number
  per_page?: number
  total?: number
  total_pages?: number
}

export interface IAuthLogin {
  payload: {
    username: string
    password: string
  }
  response: any
}

export interface ICategory {
  _id: string
  name: string
  icon: string
  createdAt: string
  updatedAt: string
  slugname: string
}
export interface ISubCategory {
  category: ICategory
  _id: string
  name: string
  icon: string
  createdAt: string
  updatedAt: string
  slugname: string
}

export interface ICategoriesApi {
  params: {
    page: number
  }
  response: {
    data: IApiResponse<{
      categories: ICategory[]
    }>
  }
}

export interface ISubCategoriesApi {
  params: {
    page: number
  }
  response: {
    data: IApiResponse<{
      subcategories: ISubCategory[]
    }>
  }
}
