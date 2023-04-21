import '@/shared/css/globals.css'
import type { AppProps } from 'next/app'
import NextProgress from '~/shared/lib/next-progress'
import 'react-tooltip/dist/react-tooltip.css'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
