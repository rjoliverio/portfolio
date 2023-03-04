import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { resumeDetails } from '~/shared/json/resumeDetails'
import { fadeInUp, slideToRight, stagger } from '~/shared/animation'
import { List } from 'react-feather'

type Props = {}

const SkillsDetails = (props: Props) => {
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
          <span className=" bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-xl font-bold uppercase text-transparent">
            Technical Skills
          </span>
          <div className="flex cursor-pointer items-center space-x-1 transition-all duration-300 hover:scale-110">
            <List className="h-4 w-4 text-cyan-400" />
            <span
              onClick={() => router.push('/about')}
              className="text-md  bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text font-bold uppercase text-transparent "
            >
              Summary
            </span>
          </div>
        </motion.div>
        <div className="flex w-full flex-col space-y-3 text-justify">
          <div className="flex w-full flex-col space-x-0 space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex w-40">
              <span className="w-full text-left text-sm">Tools</span>
            </div>
            <div className="flex w-full flex-col space-y-2 text-justify">
              {resumeDetails.skills.technical_skills.tools.map((tool, i) => (
                <div key={i} className="w-full rounded-full bg-gray-200">
                  <motion.div
                    variants={slideToRight(tool.percentage)}
                    style={{ width: tool.percentage + '%' }}
                    initial="initial"
                    animate="animate"
                    className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-1.5 text-left text-xs font-medium leading-none text-white"
                  >
                    <tool.icon className="h-3 w-3" /> <span>{tool.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-col space-x-0 space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex w-40">
              <span className="w-full text-left text-sm ">Database Management</span>
            </div>
            <div className="flex w-full flex-col space-y-2 text-justify">
              {resumeDetails.skills.technical_skills.database_management.map((db, i) => (
                <div key={i} className="w-full rounded-full bg-gray-200">
                  <motion.div
                    variants={slideToRight(db.percentage)}
                    initial="initial"
                    animate="animate"
                    className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-1.5 text-left text-xs font-medium leading-none text-white"
                    style={{ width: db.percentage + '%' }}
                  >
                    <db.icon className="h-3 w-3" /> <span>{db.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-col space-x-0 space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex w-40">
              <span className="w-full text-left text-sm ">Languages & Frameworks</span>
            </div>
            <div className="flex w-full flex-col space-y-2 text-justify">
              {resumeDetails.skills.technical_skills.languages.map((language, i) => (
                <div key={i} className="w-full rounded-full bg-gray-200">
                  <motion.div
                    variants={slideToRight(language.percentage)}
                    initial="initial"
                    animate="animate"
                    className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-1.5 text-left text-xs font-medium leading-none text-white"
                    style={{ width: language.percentage + '%' }}
                  >
                    <language.icon className="h-3 w-3" />
                    <span>{language.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-col space-x-0 space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex w-40">
              <span className="w-full text-left text-sm ">Deployment</span>
            </div>
            <div className="flex w-full flex-col space-y-2 text-justify">
              {resumeDetails.skills.technical_skills.deployment.map((deploy, i) => (
                <div key={i} className="w-full rounded-full bg-gray-200">
                  <motion.div
                    variants={slideToRight(deploy.percentage)}
                    initial="initial"
                    animate="animate"
                    className="flex items-center space-x-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 p-1.5 text-left text-xs font-medium leading-none text-white"
                    style={{ width: deploy.percentage + '%' }}
                  >
                    <deploy.icon className="h-3 w-3" />
                    <span>{deploy.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex w-full flex-col space-y-3 p-5">
        <div className="flex w-full flex-row items-center justify-between">
          <span className=" bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-xl font-bold uppercase text-transparent">
            Soft Skills
          </span>
        </div>
        <div className="flex w-full flex-row space-x-12">
          <div className="flex w-full flex-wrap space-x-2 lg:space-y-0">
            {resumeDetails.skills.soft_skills.map((soft, i) => (
              <motion.div
                variants={fadeInUp}
                key={i}
                className={`mb-2 text-center text-sm ${
                  !i ? 'ml-2 lg:ml-0' : ''
                } rounded-xl bg-gray-400 py-0.5 px-2 font-medium text-white lg:mb-0`}
              >
                {soft.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillsDetails
