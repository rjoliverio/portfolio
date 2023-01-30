import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { fadeInUp, stagger } from '~/shared/animation'
import { resumeDetails } from '~/shared/json/resumeDetails'

type Props = {}

const ProfileDetails = (props: Props) => {
  const router = useRouter()
  return (
    <motion.div
      variants={stagger}
      className="w-full  flex flex-col flex-1 bg-gray-100 border shadow h-full rounded-xl z-10"
    >
      <div className="flex flex-col p-5 w-full space-y-3">
        <motion.div
          variants={fadeInUp}
          className="flex flex-row items-center justify-between w-full"
        >
          <span className=" uppercase text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
            Summary
          </span>
          <span
            onClick={() => router.push('/about/skills')}
            className="cursor-pointer hover:scale-110 transition-all duration-300 uppercase text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500"
          >
            Skills
          </span>
        </motion.div>
        <motion.div variants={fadeInUp} className="w-full text-justify">
          <span className="text-sm text-justify">{resumeDetails.summary}</span>
        </motion.div>
      </div>
      <hr />
      <div className="flex flex-col p-5 w-full space-y-3">
        <motion.div
          variants={fadeInUp}
          className="flex flex-row items-center justify-between w-full"
        >
          <span className=" uppercase text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
            Education
          </span>
        </motion.div>
        <div className="flex w-full flex-col lg:flex-row space-x-3 lg:space-x-12 space-y-2 lg:space-y-0">
          <motion.div variants={fadeInUp} className="flex w-40 h-full">
            <span className="text-xs text-left py-0.5 px-2 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl text-white font-semibold">
              {resumeDetails.education.date_inclusion}
            </span>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col text-left">
            <span className="text-sm font-semibold text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
              {resumeDetails.education.degree}
            </span>
            <span className="text-sm  text-left">
              {resumeDetails.education.school}
            </span>
            <span className="text-sm  text-left">
              {resumeDetails.education.scholarship}
            </span>
            <span className="text-sm italic text-left">
              {resumeDetails.education.award}
            </span>
          </motion.div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col p-5 w-full space-y-3">
        <motion.div
          variants={fadeInUp}
          className="flex flex-row items-center justify-between w-full"
        >
          <span className=" uppercase text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
            Experiences
          </span>
        </motion.div>
        {resumeDetails.work_experiences.map((work, i) => (
          <div
            key={i}
            className="flex w-full flex-col lg:flex-row space-x-3 lg:space-x-12 space-y-2 lg:space-y-0"
          >
            <motion.div
              variants={fadeInUp}
              className="flex w-auto lg:w-40 h-full"
            >
              <span className="text-xs text-left py-0.5 px-2 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl text-white font-semibold">
                {work.date_inclusion}
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col text-left">
              <span className="text-sm font-semibold text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
                {work.position}
              </span>
              <span className="text-sm  text-left">{work.company}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ProfileDetails
