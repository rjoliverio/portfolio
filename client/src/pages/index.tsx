import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '~/components/templates/Layout'
import { fadeInUp, routeAnimation, stagger } from '~/shared/animation'
import Link from 'next/link'
import { resumeDetails } from '~/shared/json/resumeDetails'

const MotionDiv = dynamic(() => import('framer-motion').then((module) => module.motion.div), {
  ssr: false,
})
const TypeAnimation = dynamic(
  () => import('react-type-animation').then((module) => module.TypeAnimation),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Layout metaTitle="Rj Oliverio | Home">
      <section className="h-full w-full z-10">
        <MotionDiv variants={routeAnimation} initial="initial" animate="animate" exit="exit">
          <div className="mx-auto flex max-w-5xl items-center justify-center space-x-5 lg:justify-between ">
            <div className="flex flex-col text-left text-gray-500">
              <span className="text-sm font-semibold ">HELLO 👋</span>
              <span className="my-3 text-4xl font-bold text-gray-700 md:text-5xl">
                I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  {' '}
                  Rogelio
                </span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  John
                </span>
              </span>
              <span className="text-lg font-medium">
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={['IT Graduate 🎓', 1000, 'Junior Web Developer 💻', 1000]}
                  speed={50} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ fontSize: '1.125rem' }}
                  wrapper="span" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
              </span>
              <MotionDiv variants={fadeInUp}>
                <button
                  onClick={() => router.push('/about')}
                  className="my-10 rounded-md border-2 border-amber-400 bg-amber-400 p-3 text-xs font-semibold text-white shadow-xl shadow-amber-200 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-amber-400"
                >
                  GET TO KNOW ME
                </button>
              </MotionDiv>
            </div>
            <MotionDiv
              variants={stagger}
              className="relative mx-auto hidden h-[560px] transition duration-700 ease-in-out lg:flex lg:flex-1 lg:flex-shrink-0"
            >
              <MotionDiv variants={fadeInUp} className="z-20">
                <Link href={resumeDetails.socials.github} passHref>
                  <div className="relative mt-2 ml-32 h-[60px] w-[60px] rotate-6 rounded-lg bg-white shadow-lg  transition-all duration-300 hover:scale-110 ">
                    <Image
                      src="/images/github-logo.svg"
                      className="absolute inset-0 m-auto h-[50px] w-[50px] object-contain object-center"
                      alt="background-shape"
                      width={50}
                      height={50}
                      blurDataURL="/images/github-logo.svg"
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} className="absolute top-40 z-20">
                <Link href={resumeDetails.socials.linkedin} passHref>
                  <div className="relative mt-2 ml-24 h-[45px] w-[45px] -rotate-6 rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-110 ">
                    <Image
                      src="/images/linkedin-logo.svg"
                      className="absolute inset-0 m-auto h-[35px] w-[35px] object-contain object-center"
                      alt="background-shape"
                      width={35}
                      height={35}
                      blurDataURL="/images/linkedin-logo.svg"
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} className="absolute top-32 right-20 z-20">
                <Link
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resumeDetails.socials.gmail}`}
                  passHref
                >
                  <div className="relative h-[45px] w-[45px] rotate-3 rounded-lg bg-white shadow-lg transition-all duration-300  hover:scale-110 ">
                    <Image
                      src="/images/gmail-logo.svg"
                      className="absolute inset-0 m-auto h-[35px] w-[35px] object-contain object-center"
                      alt="background-shape"
                      width={35}
                      height={35}
                      blurDataURL="/images/gmail-logo.svg"
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </MotionDiv>
              <MotionDiv
                variants={fadeInUp}
                className="absolute inset-0 z-10 hidden h-full w-full flex-shrink-0  flex-grow-0 lg:flex"
              >
                <Image
                  src="/images/standing-portrait.png"
                  className="mx-auto object-contain object-center"
                  alt="background-shape"
                  fill
                  blurDataURL="/images/standing-portrait.png"
                  placeholder="blur"
                />
              </MotionDiv>
              <Image
                src="/images/circle-dot.svg"
                className="absolute top-0 left-16 right-0 w-60 object-contain object-center"
                alt="circle dot"
                blurDataURL="/images/circle-dot.svg"
                width={240}
                height={240}
                placeholder="blur"
              />
              <Image
                src="/images/circle-dot.svg"
                className="absolute right-20 top-24 w-40 object-contain object-center"
                alt="circle dot"
                blurDataURL="/images/circle-dot.svg"
                width={160}
                height={160}
                placeholder="blur"
              />
              <div className="absolute bottom-0 left-0 right-0 mx-auto h-[320px] w-[380px] rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg"></div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </section>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  if (query.access_token) {
    res.setHeader('Set-Cookie', `access_token=${query.access_token}`)
    return {
      redirect: {
        permanent: false,
        destination: '/about',
      },
    }
  }
  return { props: {} }
}
export default Home
