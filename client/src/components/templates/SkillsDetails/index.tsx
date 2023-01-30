import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { resumeDetails } from '~/shared/json/resumeDetails'
import { fadeInUp, slideToRight, stagger } from '~/shared/animation'

type Props = {}

const SkillsDetails = (props: Props) => {
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
          <span className=" uppercase text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            Technical Skills
          </span>
          <span
            onClick={() => router.push('/about')}
            className="cursor-pointer hover:scale-110 transition-all duration-300 uppercase text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400"
          >
            Summary
          </span>
        </motion.div>
        <div className="w-full flex flex-col text-justify space-y-3">
          <div className="flex w-full flex-col lg:flex-row space-x-0 lg:space-x-12 space-y-2 lg:space-y-0">
            <div className="flex w-40">
              <span className="text-sm text-left w-full">Tools</span>
            </div>
            <div className="flex flex-col w-full text-justify space-y-2">
              {resumeDetails.skills.technical_skills.tools.map((tool, i) => (
                <div key={i} className="w-full bg-gray-200 rounded-full">
                  <motion.div
                    variants={slideToRight(tool.percentage)}
                    style={{ width: tool.percentage + '%' }}
                    initial="initial"
                    animate="animate"
                    className="bg-gradient-to-r space-x-1 flex items-center from-amber-500 to-yellow-400 text-xs font-medium text-white text-left p-1.5 leading-none rounded-full"
                  >
                    <tool.icon className="h-3 w-3" /> <span>{tool.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-col lg:flex-row space-x-0 lg:space-x-12 space-y-2 lg:space-y-0">
            <div className="flex w-40">
              <span className="text-sm text-left w-full ">
                Database Management
              </span>
            </div>
            <div className="flex flex-col w-full text-justify space-y-2">
              {resumeDetails.skills.technical_skills.database_management.map(
                (db, i) => (
                  <div key={i} className="w-full bg-gray-200 rounded-full">
                    <motion.div
                      variants={slideToRight(db.percentage)}
                      initial="initial"
                      animate="animate"
                      className="bg-gradient-to-r space-x-1 flex items-center from-amber-500 to-yellow-400 text-xs font-medium text-white text-left p-1.5 leading-none rounded-full"
                      style={{ width: db.percentage + '%' }}
                    >
                      <db.icon className="h-3 w-3" /> <span>{db.name}</span>
                    </motion.div>
                  </div>
                )
              )}
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-col lg:flex-row space-x-0 lg:space-x-12 space-y-2 lg:space-y-0">
            <div className="flex w-40">
              <span className="text-sm text-left w-full ">
                Languages & Frameworks
              </span>
            </div>
            <div className="flex flex-col w-full text-justify space-y-2">
              {resumeDetails.skills.technical_skills.languages.map(
                (language, i) => (
                  <div key={i} className="w-full bg-gray-200 rounded-full">
                    <motion.div
                      variants={slideToRight(language.percentage)}
                      initial="initial"
                      animate="animate"
                      className="bg-gradient-to-r space-x-1 flex items-center from-amber-500 to-yellow-400 text-xs font-medium text-white text-left p-1.5 leading-none rounded-full"
                      style={{ width: language.percentage + '%' }}
                    >
                      <language.icon className="h-3 w-3" />
                      <span>{language.name}</span>
                    </motion.div>
                  </div>
                )
              )}
            </div>
          </div>
          <hr />
          <div className="flex w-full flex-col lg:flex-row space-x-0 lg:space-x-12 space-y-2 lg:space-y-0">
            <div className="flex w-40">
              <span className="text-sm text-left w-full ">Deployment</span>
            </div>
            <div className="flex flex-col w-full text-justify space-y-2">
              {resumeDetails.skills.technical_skills.deployment.map(
                (deploy, i) => (
                  <div key={i} className="w-full bg-gray-200 rounded-full">
                    <motion.div
                      variants={slideToRight(deploy.percentage)}
                      initial="initial"
                      animate="animate"
                      className="bg-gradient-to-r space-x-1 flex items-center from-amber-500 to-yellow-400 text-xs font-medium text-white text-left p-1.5 leading-none rounded-full"
                      style={{ width: deploy.percentage + '%' }}
                    >
                      <deploy.icon className="h-3 w-3" />
                      <span>{deploy.name}</span>
                    </motion.div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col p-5 w-full space-y-3">
        <div className="flex flex-row items-center justify-between w-full">
          <span className=" uppercase text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            Soft Skills
          </span>
        </div>
        <div className="flex w-full flex-row space-x-12">
          <div className="flex w-full space-x-2 flex-wrap lg:space-y-0">
            {resumeDetails.skills.soft_skills.map((soft, i) => (
              <motion.div
                variants={fadeInUp}
                key={i}
                className={`text-sm text-center mb-2 ${
                  !i ? 'ml-2 lg:ml-0' : ''
                } lg:mb-0 py-0.5 px-2 bg-gray-400 rounded-xl text-white font-medium`}
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
