import React from 'react'
import dynamic from 'next/dynamic'

import Layout from '~/components/templates/Layout'
import { routeAnimation } from '~/shared/animation'

const MotionDiv = dynamic(() => import('framer-motion').then((module) => module.motion.div), {
  ssr: false,
})
const Profile = dynamic(() => import('~/components/templates/Profile'), {
  ssr: false,
})
const SkillsDetails = dynamic(() => import('~/components/templates/SkillsDetails'), {
  ssr: false,
})

const Skills = () => {
  return (
    <Layout metaTitle="Rj Oliverio | Skills">
      <section className="my-5 h-full w-full lg:my-0">
        <MotionDiv
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mx-auto my-auto flex max-w-5xl flex-col items-center justify-center space-x-0 space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0"
        >
          <Profile />
          <SkillsDetails />
        </MotionDiv>
      </section>
    </Layout>
  )
}

export default Skills
