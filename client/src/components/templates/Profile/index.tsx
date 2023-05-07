import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Download, Mail, MapPin } from 'react-feather'

import { GithubIcon } from '~/shared/icons/GithubIcon'
import { GoogleIcon } from '~/shared/icons/GoogleIcon'
import { fadeInUp, stagger } from '~/shared/animation'
import { LinkedinIcon } from '~/shared/icons/LinkedinIcon'
import { resumeDetails } from '~/shared/json/resumeDetails'
import { useAuth } from '~/shared/hooks/useAuth'
import { client } from '~/shared/lib/client'

const Profile = () => {
  const router = useRouter()
  const { handleCheckAuth } = useAuth()
  const { isLoading, isError } = handleCheckAuth()
  const handleDownloadResume = async () => {
    const res = await client.get('/portfolio/pj_rj_oliverio_resume.pdf', {
      baseURL: process.env.NEXT_PUBLIC_CLIENT_ORIGIN,
      responseType: 'blob',
    })
    const url = window.URL.createObjectURL(res.data)
    const anchorElement = document.createElement('a')
    anchorElement.href = url
    anchorElement.download = 'RESUME_OLIVERIO.pdf'
    anchorElement.click()
    anchorElement.remove()
  }
  const handleResumeClick = () => {
    if (isLoading && !isError) {
      return null
    } else if (!isLoading && !isError) {
      handleDownloadResume()
    } else {
      router.push(`${process.env.NEXT_PUBLIC_API_ORIGIN}/api/redirect`)
    }
  }
  return (
    <motion.div
      variants={stagger}
      className="z-10 my-auto flex h-full w-full max-w-none flex-1 flex-col  space-y-3 rounded-xl border bg-gray-100 px-5 py-8 shadow lg:max-w-xs"
    >
      <motion.div
        variants={fadeInUp}
        className={`relative mx-auto h-52 w-52 rounded-full border-4 bg-white  ${
          router.pathname.includes('skills') ? 'border-amber-400' : 'border-cyan-500'
        }`}
      >
        <Image
          src="/images/square-portrait.png"
          className="absolute rounded-full object-cover"
          alt="Square Portrait"
          fill
          blurDataURL="/images/square-portrait.png"
          placeholder="blur"
        />
      </motion.div>
      <div className="flex flex-col space-y-5">
        <motion.div variants={fadeInUp}>
          <p className="text-2xl font-bold text-gray-700">
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
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
          <>
            <button
              disabled={isLoading && !isError}
              onClick={handleResumeClick}
              className={`mx-auto flex w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-200 p-2 px-3  ${
                !isLoading && isError ? 'text-xs' : 'text-sm'
              } hover:bg-gray-300`}
            >
              {isLoading && !isError ? (
                'Loading...'
              ) : !isLoading && !isError ? (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </>
              ) : (
                <>
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Sign in to download resume
                </>
              )}
            </button>
          </>
        </motion.div>
        <div className="flex w-full flex-col space-y-2 px-5 text-sm">
          <motion.div variants={fadeInUp} className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{resumeDetails.address}</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>{resumeDetails.contacts.email}</span>
          </motion.div>
        </div>
        <hr />
        <div className="flex flex-col space-y-3">
          <motion.div variants={fadeInUp}>
            <p className="text-left text-sm">Others</p>
          </motion.div>
          <div className="flex flex-row space-x-2">
            <motion.div
              variants={fadeInUp}
              className="cursor-pointer rounded-full border bg-white p-2 shadow"
            >
              <Link href={resumeDetails.socials.github} passHref>
                <GithubIcon className="h-7 w-7" />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="cursor-pointer rounded-full border bg-white p-2 shadow"
            >
              <Link href={resumeDetails.socials.linkedin} passHref>
                <LinkedinIcon className="h-7 w-7" />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="cursor-pointer rounded-full border bg-white p-2 shadow"
            >
              <Link
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resumeDetails.socials.gmail}`}
                passHref
              >
                <GoogleIcon className="h-7 w-7" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Profile
