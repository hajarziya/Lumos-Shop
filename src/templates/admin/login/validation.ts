import { object, string } from 'yup'

export const LoginSchema = object({
  username: string().required('Username is required')
    .min(4, 'Password must be at least 4 characters')
    .max(12, 'Password must not exceed 12 characters'),
  password: string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters')
    .max(12, 'Password must not exceed 12 characters')
    .matches(
      /^(?=.*[a-z])(?=.*\d)/,
      'Password must contain at least one letter and one number'
    )
})
