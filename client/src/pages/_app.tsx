import React from 'react'
import type { AppProps } from 'next/app'
import 'react-tooltip/dist/react-tooltip.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/shared/css/globals.css'
import NextProgress from '~/shared/lib/next-progress'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      enabled: false,
      refetchOnMount: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextProgress />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
