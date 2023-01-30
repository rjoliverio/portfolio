import React from 'react'

import Layout from '~/components/templates/Layout'
import Profile from '~/components/templates/Profile'
import SkillsDetails from '~/components/templates/SkillsDetails'

type Props = {}

const Skills = (props: Props) => {
  return (
    <Layout metaTitle="Skills">
      <section className="h-full w-full my-5 lg:my-0">
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-5xl lg:space-x-5 space-x-0 space-y-5 lg:space-y-0 my-auto">
          <Profile />
          <SkillsDetails />
        </div>
      </section>
    </Layout>
  )
}

export default Skills
