import { useMutation } from 'react-query'
import { login, signup } from '@src/api/auth/utils'
import { UseMutationOptions } from '@src/api/config/types'

export const useLogin = (options?: UseMutationOptions<typeof login>) => {
  return useMutation({
    mutationFn: login,
    ...options
  })
}

export const useSignup = (options?: UseMutationOptions<typeof signup>) => {
  return useMutation({
    mutationFn: signup,
    ...options
  })
}
