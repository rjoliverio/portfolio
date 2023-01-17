import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import IntroSection from '~/components/templates/IntroSection'
import Navbar from '~/components/templates/Navbar'
import SummarySection from '~/components/templates/SummarySection'

const Home: NextPage = () => {
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
    <div className="flex min-h-screen flex-col font-poppins antialiased">
      <div className="block lg:hidden">
        <div className=" block inset-0 absolute box-border m-0 bg-gray-50"></div>
      </div>
      <Head>
        <title>Create Next App</title>
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
      <main className="flex w-full relative flex-col text-center">
        <IntroSection />
        <SummarySection />
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
				<a
					className="flex items-center justify-center gap-2"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</a>
			</footer> */}
    </div>
  )
}

export default Home
