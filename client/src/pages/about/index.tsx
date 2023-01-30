import React from 'react'

import Layout from '~/components/templates/Layout'
import Profile from '~/components/templates/Profile'
import ProfileDetails from '~/components/templates/ProfileDetails'

type Props = {}

const About = (props: Props) => {
  return (
    <Layout metaTitle="About">
      <section className="h-full w-full my-5 lg:my-0">
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-5xl lg:space-x-5 space-x-0 space-y-5 lg:space-y-0 my-auto">
          <Profile />
          <ProfileDetails />
        </div>
      </section>
    </Layout>
  )
}

export default About
