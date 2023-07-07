import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '~/components/templates/Layout'
import { fadeInUp, routeAnimation, stagger } from '~/shared/animation'
import Link from 'next/link'
import { resumeDetails } from '~/shared/json/resumeDetails'
import moment from 'moment'
import { GithubIcon } from '~/shared/icons/GithubIcon'
import { LinkedinIcon } from '~/shared/icons/LinkedinIcon'
import { GoogleIcon } from '~/shared/icons/GoogleIcon'
import { ArrowIcon } from '~/shared/icons/ArrowIcon'

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
      <section className="z-10 h-full w-full">
        <MotionDiv variants={routeAnimation} initial="initial" animate="animate" exit="exit">
          <div className="mx-auto flex max-w-6xl items-center justify-center space-x-5 lg:justify-between ">
            <div className="flex flex-col space-y-4 text-left text-gray-500 md:space-y-6">
              <div className="flex flex-row space-x-2">
                <MotionDiv
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link href={resumeDetails.socials.github} passHref>
                    <GithubIcon className="h-7 w-7" />
                  </Link>
                </MotionDiv>
                <MotionDiv
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link href={resumeDetails.socials.linkedin} passHref>
                    <LinkedinIcon className="h-7 w-7" />
                  </Link>
                </MotionDiv>
                <MotionDiv
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resumeDetails.socials.gmail}`}
                    passHref
                  >
                    <GoogleIcon className="h-7 w-7" />
                  </Link>
                </MotionDiv>
              </div>
              <span className=" font-semibold ">HELLO 👋</span>
              <span className="text-[43px] font-bold text-gray-700 md:text-5xl">
                I&apos;m{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent">
                  {' '}
                  Rogelio
                </span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  John
                </span>
              </span>
              <div className="flex flex-col space-y-1 lg:space-y-0">
                <span className="block text-lg font-semibold lg:hidden">
                  <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                      'IT Graduate 🎓',
                      1000,
                      'Web Developer 💻',
                      1000,
                      'Freelancer 🤵',
                      1000,
                    ]}
                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                    style={{ fontSize: '1.125rem' }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                  />
                </span>
                <span className="max-w-[430px] font-normal lg:font-medium">
                  A passionate and task-driven IT professional with 1+ years of experience in web
                  design and development.
                </span>
              </div>
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
              <MotionDiv
                variants={fadeInUp}
                className="absolute inset-0 z-20 m-auto h-[500px] w-[500px] object-contain object-center"
              >
                <Image
                  src="/images/circle-portrait-bg.svg"
                  className="object-contain object-center"
                  alt="background-shape"
                  width={500}
                  height={500}
                  blurDataURL="/images/circle-portrait-bg.svg"
                  placeholder="blur"
                />
              </MotionDiv>

              <MotionDiv
                variants={fadeInUp}
                className="absolute inset-0 bottom-16 z-20 m-auto h-[500px] w-[500px] object-contain object-center"
              >
                <Image
                  src="/images/circle-portrait.svg"
                  className="h-[500px] w-[500px] object-contain object-center"
                  alt="background-shape"
                  width={500}
                  height={500}
                  blurDataURL="/images/circle-portrait.svg"
                  placeholder="blur"
                />
              </MotionDiv>
              <MotionDiv
                variants={fadeInUp}
                className="absolute inset-0 z-20 m-auto h-[600px] w-[600px] object-contain object-center"
              >
                <Image
                  src="/images/confetti-bg.svg"
                  className="h-[600px] w-[600px] object-contain object-center"
                  alt="background-shape"
                  width={600}
                  height={600}
                  blurDataURL="/images/confetti-bg.svg"
                  placeholder="blur"
                />
              </MotionDiv>
              <MotionDiv variants={fadeInUp} className="absolute bottom-52 left-40 z-20">
                <div className="relative inline-flex animate-moveCursor_v1 flex-col">
                  <ArrowIcon className="absolute h-5 w-5 fill-red-300 text-red-300" />
                  <div className="ml-4 mt-3 rounded-full bg-red-300 px-4 py-2">IT Graduate</div>
                </div>
              </MotionDiv>
              <MotionDiv variants={fadeInUp} className="absolute bottom-32 right-40 z-20 ">
                <div className="relative inline-flex animate-moveCursor_v2 flex-col">
                  <ArrowIcon className="absolute h-5 w-5 fill-green-300 text-green-300" />
                  <div className="ml-4 mt-3 rounded-full bg-green-300 px-4 py-2">Web Developer</div>
                </div>
              </MotionDiv>
              <MotionDiv variants={fadeInUp} className="absolute bottom-60 right-14 z-20 ">
                <div className="relative inline-flex animate-moveCursor_v3 flex-col">
                  <ArrowIcon className="absolute h-5 w-5 fill-violet-300 text-violet-300" />
                  <div className="ml-4 mt-3 rounded-full bg-violet-300 px-4 py-2">Freelancer</div>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </MotionDiv>
      </section>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  if (query.access_token) {
    res.setHeader(
      'Set-Cookie',
      `access_token=${query.access_token}; Expires=${new Date(
        moment().add(1, 'y').toISOString()
      ).toUTCString()}`
    )
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
