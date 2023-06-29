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
    window.scrollY >= 20 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])
  return (
    <div className="relative flex h-full min-h-screen flex-col bg-gray-50 antialiased">
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <div
        className={`absolute inset-0 block ${
          router.pathname.includes('contact') || router.pathname.includes('portfolio')
            ? "bg-[url('/images/shapes-bg-down.svg')]"
            : "bg-[url('/images/shapes-bg-up.svg')]"
        } bg-cover  bg-fixed bg-center`}
      ></div>
      <header
        className={`sticky top-0 z-50 w-full bg-transparent  ${
          navBg
            ? 'bg-white/60 drop-shadow-md backdrop-blur-md transition duration-300 ease-in-out'
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
