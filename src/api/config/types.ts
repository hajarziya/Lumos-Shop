import { UseMutationOptions as BaseUseMutationOptions, UseQueryOptions as BaseUseQueryOptions } from 'react-query'
import { type AxiosError } from 'axios'

export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T

export type UseMutationOptions<
	F extends (...args: any) => Promise<unknown>,
	S = Parameters<F>[0] extends undefined ? void : Parameters<F>[0],
> = BaseUseMutationOptions<Awaited<ReturnType<F>>, AxiosError, S>

export type UseQueryOptions<
	F extends (...args: any) => Promise<unknown>,
	S = Awaited<ReturnType<F>>,
> = BaseUseQueryOptions<Awaited<ReturnType<F>>, AxiosError, S, any>

declare module 'axios' {
  interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>

    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

    options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>

    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>

    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>

    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  }
}
