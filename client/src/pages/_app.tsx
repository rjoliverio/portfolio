import '@/shared/css/globals.css'
import type { AppProps } from 'next/app'
import NextProgress from '~/shared/lib/next-progress'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
