import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { theme } from '@src/theme'
import { CacheProvider } from '@emotion/react'
import { muiCache } from '@src/theme/muiCache'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CartProvider } from '@src/context/CartContext'

const queryClient = new QueryClient()

export default function App ({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
        <CacheProvider value={muiCache()}>
            <CartProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                        <ReactQueryDevtools/>
                    </ThemeProvider>
                </LocalizationProvider>
            </CartProvider>
        </CacheProvider>
    </QueryClientProvider>
}
