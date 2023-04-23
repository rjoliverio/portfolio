import React from 'react'
import { motion } from 'framer-motion'

import Layout from '~/components/templates/Layout'
import { routeAnimation } from '~/shared/animation'
import Profile from '~/components/templates/Profile'
import ProfileDetails from '~/components/templates/ProfileDetails'

const About = () => {
  return (
    <Layout metaTitle="Rj Oliverio | About">
      <section className="my-5 h-full w-full lg:my-0">
        <motion.div
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mx-auto my-auto flex max-w-5xl flex-col items-center justify-center space-x-0 space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0"
        >
          <Profile />
          <ProfileDetails />
        </motion.div>
      </section>
    </Layout>
  )
}

export default About
