import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { TypeAnimation } from 'react-type-animation'

import Layout from '~/components/templates/Layout'
import { fadeInUp, routeAnimation, stagger } from '~/shared/animation'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Layout metaTitle="Home">
      <section className="h-full w-full">
        <motion.div
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex justify-center lg:justify-between items-center space-x-5 max-w-5xl mx-auto ">
            <div className="flex flex-col text-gray-500 text-left">
              <span className="font-semibold text-sm ">HELLO 👋</span>
              <span className="text-4xl md:text-5xl font-bold my-3 text-gray-700">
                I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
                  {' '}
                  Rogelio
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  John
                </span>
              </span>
              <span className="font-medium text-lg">
                <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                    'IT Graduate 🎓',
                    1000,
                    'Junior Web Developer 💻',
                    1000,
                  ]}
                  speed={50} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ fontSize: '1.125rem' }}
                  wrapper="span" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
              </span>
              <motion.div variants={fadeInUp}>
                <button
                  onClick={() => router.push('/about')}
                  className="rounded-md hover:scale-110 transition-all duration-300 shadow-xl border-2 border-amber-400 shadow-amber-200 hover:bg-white hover:text-amber-400 font-semibold text-xs my-10 p-3 bg-amber-400 text-white"
                >
                  GET TO KNOW ME
                </button>
              </motion.div>
            </div>
            <motion.div
              variants={stagger}
              className="relative hidden lg:flex-1 lg:flex h-[560px] transition ease-in-out duration-700 mx-auto lg:flex-shrink-0"
            >
              <motion.div variants={fadeInUp} className="z-20">
                <a href="#">
                  <div className="bg-white hover:scale-110 transition-all duration-300 rounded-lg relative w-[60px] h-[60px] shadow-lg  mt-2 ml-32 rotate-6 ">
                    <img
                      src="/images/github-logo.svg"
                      className="object-contain object-center w-[50px] h-[50px] inset-0 m-auto absolute"
                      alt="background-shape"
                    />
                  </div>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="absolute top-40 z-20">
                <a href="#">
                  <div className="bg-white hover:scale-110 transition-all duration-300 rounded-lg relative w-[45px] h-[45px] shadow-lg mt-2 ml-24 -rotate-6 ">
                    <img
                      src="/images/linkedin-logo.svg"
                      className="object-contain object-center w-[35px] h-[35px] inset-0 m-auto absolute"
                      alt="background-shape"
                    />
                  </div>
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="absolute top-32 right-20 z-20"
              >
                <a href="#">
                  <div className="bg-white hover:scale-110 transition-all duration-300 rounded-lg relative w-[45px] h-[45px] shadow-lg  rotate-3 ">
                    <img
                      src="/images/gmail-logo.svg"
                      className="object-contain object-center w-[35px] h-[35px] inset-0 m-auto absolute"
                      alt="background-shape"
                    />
                  </div>
                </a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="absolute w-full inset-0 h-full flex-shrink-0 z-10 flex-grow-0  hidden lg:flex"
              >
                <img
                  src="/images/standing-portrait.png"
                  className="object-contain object-center mx-auto"
                  alt="background-shape"
                />
              </motion.div>
              <img
                src="/images/circle-dot.svg"
                className="object-contain object-center w-60 absolute top-0 left-16 right-0"
                alt="circle dot"
              />
              <img
                src="/images/circle-dot.svg"
                className="object-contain object-center w-40 absolute right-20 top-24"
                alt="circle dot"
              />
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 absolute shadow-lg bottom-0 h-[320px] w-[380px] left-0 right-0 rounded-xl mx-auto"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layout>
  )
}

export default Home
