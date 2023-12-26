import { array } from 'yup'

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

export interface IProduct {
  _id: string
  name: string
  icon: string
  images: array
  quantity: number
  price: number
  slugname: string
  category: ICategory
  subcategory: ISubCategory
  brand: string
  description: string
}

export interface IUser {
  _id: string
  firstname: string
  lastname: string
  address: string
  active: string
  createdAt: string
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
    category?: string
  }
  response: {
    data: IApiResponse<{
      subcategories: ISubCategory[]
    }>
  }
}

export interface IProductsApi {
  params: {
    page: number
    category?: string
    subcategory?: string
  }
  response: {
    data: IApiResponse<{
      products: IProduct[]
    }>
  }
}

export interface IProductDetailsApi {
  params: {
    id: string
  }
  response: {
    data: IApiResponse<{ product: IProduct }>
  }
}

export interface IOrder {
  _id: string
  user: IUser
  products: IProduct[]
  totalPrice: number
  deliveryDate: string
  deliveryStatus: boolean
  createdAt: string
  updatedAt: string
}

export interface IOrdersApi {
  params: {
    page: number
    deliveryStatus?: boolean
  }
  response: {
    data: IApiResponse<{
      orders: IOrder[]
    }>
  }
}

export interface IUsersApi {
  params: {
    page: number
  }
  response: {
    data: IApiResponse<{
      users: IUser[]
    }>
  }
}

export interface ICreateProductApi {
  body: formData
  response: { data: IProduct }
}

export interface IEditProductApi {
  params: { id: string }
  body: formData
  response: { data: IProduct }
}

export interface IAddToCartApi {
  payload: {
    user: string
    products: Array<{
      product: string
      count: number
    }>
    deliveryStatus: boolean
  }
  response: {
    data: any
  }
}

export interface IAuthSginUp {
  payload: {
    firstname: string
    lastname: string
    username: string
    password: string
    address: string
    phoneNumber: string
  }
  response: any
}
