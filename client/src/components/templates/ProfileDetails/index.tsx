import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { fadeInUp, stagger } from '~/shared/animation'
import { resumeDetails } from '~/shared/json/resumeDetails'
import { BarChart2 } from 'react-feather'

const ProfileDetails = () => {
  const router = useRouter()
  return (
    <motion.div
      variants={stagger}
      className="z-10  flex h-full w-full flex-1 flex-col rounded-xl border bg-gray-100 shadow"
    >
      <div className="flex w-full flex-col space-y-3 p-5">
        <motion.div
          variants={fadeInUp}
          className="flex w-full flex-row items-center justify-between"
        >
          <span className=" bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-xl font-bold uppercase text-transparent">
            Summary
          </span>
          <div className="flex cursor-pointer items-center space-x-1 transition-all duration-300 hover:scale-110">
            <BarChart2 className="h-4 w-4 text-amber-400" />
            <span
              onClick={() => router.push('/about/skills')}
              className="text-md bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text font-bold uppercase text-transparent"
            >
              Skills
            </span>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} className="w-full text-justify">
          <span className="text-justify text-sm">{resumeDetails.summary}</span>
        </motion.div>
      </div>
      <hr />
      <div className="flex w-full flex-col space-y-3 p-5">
        <motion.div
          variants={fadeInUp}
          className="flex w-full flex-row items-center justify-between"
        >
          <span className=" bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-xl font-bold uppercase text-transparent">
            Education
          </span>
        </motion.div>
        <div className="flex w-full flex-col space-x-3 space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
          <motion.div variants={fadeInUp} className="flex h-full w-40">
            <span className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-400 py-0.5 px-2 text-left text-xs font-semibold text-white">
              {resumeDetails.education.date_inclusion}
            </span>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col text-left">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-left text-sm font-semibold text-transparent">
              {resumeDetails.education.degree}
            </span>
            <span className="text-left  text-sm">{resumeDetails.education.school}</span>
            <span className="text-left  text-sm">{resumeDetails.education.scholarship}</span>
            <span className="text-left text-sm italic">{resumeDetails.education.award}</span>
          </motion.div>
        </div>
      </div>
      <hr />
      <div className="flex w-full flex-col space-y-3 p-5">
        <motion.div
          variants={fadeInUp}
          className="flex w-full flex-row items-center justify-between"
        >
          <span className=" bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-xl font-bold uppercase text-transparent">
            Experiences
          </span>
        </motion.div>
        {resumeDetails.work_experiences.map((work, i) => (
          <div
            key={i}
            className="flex w-full flex-col space-x-3 space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0"
          >
            <motion.div variants={fadeInUp} className="flex h-full w-auto lg:w-40">
              <span className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-400 py-0.5 px-2 text-left text-xs font-semibold text-white">
                {work.date_inclusion}
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col text-left">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-left text-sm font-semibold text-transparent">
                {work.position}
              </span>
              <span className="text-left  text-sm">{work.company}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ProfileDetails
