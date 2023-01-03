import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import IntroSection from '~/components/templates/IntroSection'
import Navbar from '~/components/templates/Navbar'

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
    <div className="flex min-h-screen flex-col font-poppins">
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
      <main className="flex w-full flex-col text-center ">
        <IntroSection />
        {/* <section>
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-gray-500 text-left">
              <span className="font-semibold text-sm ">HELLO</span>
              <span className="text-5xl font-bold my-3 text-gray-700">
                I'm Rogelio John
              </span>
              <span className="font-medium text-lg">
                IT Graduate & Junior Web Developer
              </span>
              <div>
                <button className="rounded-md shadow-md border-2 border-amber-400 hover:bg-white hover:text-amber-400 font-semibold text-xs my-10 p-3 bg-amber-400 text-white">
                  GET TO KNOW ME
                </button>
              </div>
            </div>
          </div>
        </section> */}
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
