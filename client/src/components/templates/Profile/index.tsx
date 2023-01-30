import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Download, Mail, MapPin } from 'react-feather'

import { GithubIcon } from '~/shared/icons/GithubIcon'
import { GoogleIcon } from '~/shared/icons/GoogleIcon'
import { fadeInUp, stagger } from '~/shared/animation'
import { LinkedinIcon } from '~/shared/icons/LinkedinIcon'
import { resumeDetails } from '~/shared/json/resumeDetails'

type Props = {}

const Profile = (props: Props) => {
  const router = useRouter()
  return (
    <motion.div
      variants={stagger}
      className="max-w-none lg:max-w-xs w-full h-full flex flex-col flex-1 z-10  my-auto px-5 py-8 space-y-3 bg-gray-100 border rounded-xl shadow"
    >
      <motion.div
        variants={fadeInUp}
        className={`relative w-52 h-52 rounded-full bg-white mx-auto border-4  ${
          router.pathname.includes('skills')
            ? 'border-amber-400'
            : 'border-cyan-500'
        }`}
      >
        <img
          src="/images/square-portrait.png"
          className="absolute rounded-full object-cover"
          alt=""
        />
      </motion.div>
      <div className="flex flex-col space-y-5">
        <motion.div variants={fadeInUp}>
          <p className="font-bold text-gray-700 text-2xl">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${
                router.pathname.includes('skills')
                  ? 'from-yellow-400 to-amber-500'
                  : 'from-cyan-500 to-blue-400'
              }`}
            >
              {' '}
              {`${resumeDetails.name.first_name} ${resumeDetails.name.last_name}`}
            </span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full px-5">
          <button className="bg-gray-200 border-2 w-full hover:bg-gray-300 border-gray-300 flex items-center justify-center mx-auto rounded-lg p-2 px-3 text-sm">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </button>
        </motion.div>
        <div className="w-full px-5 flex flex-col text-sm space-y-2">
          <motion.div
            variants={fadeInUp}
            className="flex space-x-2 items-center"
          >
            <MapPin className="h-4 w-4" />
            <span>{resumeDetails.address}</span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex space-x-2 items-center"
          >
            <Mail className="h-4 w-4" />
            <span>{resumeDetails.contacts.email}</span>
          </motion.div>
        </div>
        <hr />
        <div className="flex flex-col space-y-3">
          <motion.div variants={fadeInUp}>
            <p className="text-sm text-left">Others</p>
          </motion.div>
          <div className="flex flex-row space-x-2">
            <motion.div
              variants={fadeInUp}
              className="bg-white cursor-pointer shadow p-2 rounded-full border"
            >
              <GithubIcon className="w-7 h-7" />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white cursor-pointer shadow p-2 rounded-full border"
            >
              <LinkedinIcon className="w-7 h-7" />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-white cursor-pointer shadow p-2 rounded-full border"
            >
              <GoogleIcon className="w-7 h-7" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile
