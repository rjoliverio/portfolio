import Head from 'next/head'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import Navbar from './Navbar'

type Props = {
  metaTitle: string
  children: ReactNode
}

const Layout: FC<Props> = ({ metaTitle, children }): JSX.Element => {
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
    <div className="flex min-h-screen h-screen flex-col antialiased bg-gray-50">
      <div className="block absolute inset-0 bg-[url('/images/shapes-bg.svg')] bg-repeat-space"></div>
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`w-full sticky top-0 z-50 backdrop-blur-md bg-gray-50  ${
          navBg
            ? 'drop-shadow-md transition duration-300 ease-in-out bg-white/60'
            : ' drop-shadow-none bg-gray-50'
        }`}
      >
        <Navbar />
      </header>
      <main className="flex w-full items-center justify-center my-auto flex-col text-center bg-gray-50 px-5">
        {children}
      </main>
    </div>
  )
}

export default Layout
