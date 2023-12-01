import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { theme } from '@src/theme'
import { CacheProvider } from '@emotion/react'
import { muiCache } from '@src/theme/muiCache'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function App ({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
		<CacheProvider value={muiCache()}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<ReactQueryDevtools/>
			</ThemeProvider>
		</CacheProvider>
	</QueryClientProvider>
}
