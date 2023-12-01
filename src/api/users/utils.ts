import axios from '@src/api/config/axios'

export const fetchUsers = () => axios.get<any>('/users')
