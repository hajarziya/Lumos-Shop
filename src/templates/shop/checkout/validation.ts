import { object, string, number } from 'yup'

export const SingupSchema = object({
  username: string().required('Username is required')
    .min(4, 'Username must be at least 4 characters')
    .max(12, 'Username must not exceed 12 characters'),
  firstname: string().required('Firstname is required')
    .min(4, 'Firstname must be at least 4 characters')
    .max(12, 'firstname must not exceed 12 characters'),
  lastname: string().required('Lastname is required')
    .min(4, 'Lastname must be at least 4 characters')
    .max(12, 'Lastname must not exceed 12 characters'),
  phoneNumber: number().required('phoneNumber is required')
    .min(13, 'Phone Namber must be 13 characters')
    .max(13, 'Phone Number must be 13 characters'),
  password: string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters')
    .max(12, 'Password must not exceed 12 characters')
    .matches(
      /^(?=.*[a-z])(?=.*\d)/,
      'Password must contain at least one letter and one number'
    )
})
