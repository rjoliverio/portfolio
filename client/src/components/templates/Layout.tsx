import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'

import Navbar from './Navbar'

type Props = {
  metaTitle: string
  children: ReactNode
}

const Layout: FC<Props> = ({ metaTitle, children }): JSX.Element => {
  const router = useRouter()

  return (
    <div className="relative flex h-full min-h-screen flex-col bg-gray-50 antialiased">
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <div
        className={`absolute inset-0 block ${
          router.pathname.includes('contact') && "bg-[url('/images/contact-shapes-bg.svg')]"
        } bg-cover  bg-fixed bg-center`}
      ></div>
      <header
        className={`ease-in-out' } sticky top-0 z-50 w-full bg-white/60 drop-shadow-md backdrop-blur-md transition
        duration-300`}
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
