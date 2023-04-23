import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import Navbar from './Navbar'

type Props = {
  metaTitle: string
  children: ReactNode
}

const Layout: FC<Props> = ({ metaTitle, children }): JSX.Element => {
  const router = useRouter()

  const [navBg, setNavBg] = useState(false)

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])
  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-50 antialiased">
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Making websites that work for you" key="desc" />
        <meta property="og:title" content="Rj Oliverio" />
        <meta property="og:description" content="Learn more about Rj Oliverio" />
        <meta property="og:image" content="/images/seo-cover.png" />
      </Head>
      <div className="absolute inset-0 block bg-[url('/images/shapes-bg.svg')] bg-center"></div>
      <header
        className={`sticky top-0 z-50 w-full bg-gray-50 backdrop-blur-md  ${
          navBg
            ? 'bg-white/60 drop-shadow-md transition duration-300 ease-in-out'
            : ' bg-gray-50 drop-shadow-none'
        }`}
      >
        <Navbar />
      </header>
      <main
        className={`flex h-full w-full flex-1 ${
          router.pathname.includes('portfolio') ? null : 'items-center justify-center'
        } my-auto flex-col bg-gray-50 px-5 text-center`}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
