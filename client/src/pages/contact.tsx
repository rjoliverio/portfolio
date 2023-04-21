import { useState } from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'react-feather'

import { fadeInUp, routeAnimation, stagger } from '~/shared/animation'
import Layout from '~/components/templates/Layout'
import { GithubIcon } from '~/shared/icons/GithubIcon'
import { GoogleIcon } from '~/shared/icons/GoogleIcon'
import { LinkedinIcon } from '~/shared/icons/LinkedinIcon'
import { resumeDetails } from '~/shared/json/resumeDetails'
import Link from 'next/link'

const Contact: NextPage = () => {
  const [contactType, setContactType] = useState<string>('location')
  return (
    <Layout metaTitle="Page Under Construction">
      <section className="z-10 h-full w-full">
        <motion.div
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col items-center justify-center space-x-0 space-y-5 p-5 lg:flex-row lg:space-x-8 lg:space-y-0"
        >
          <motion.div
            variants={stagger}
            className="flex w-full max-w-md flex-col space-y-5 text-left text-gray-500"
          >
            <motion.div variants={fadeInUp} className="flex flex-col">
              <span className="text-sm font-semibold text-amber-400">
                CONTACT US
              </span>
              <span className="text-3xl font-semibold text-gray-700">
                Get In Touch With RJ
              </span>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-justify text-sm text-gray-700"
            >
              Should you have any questions regarding the resume, portfolios or
              projects, you may reach me at the contact details provided below
              or send me a message by the form. I will get back to you within 24
              hours.
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="block space-y-3 lg:hidden"
            >
              <div className="flex justify-center space-x-8">
                <div
                  onClick={() => setContactType('location')}
                  className="cursor-pointer rounded-lg bg-amber-400 p-5 text-white shadow-md"
                >
                  <MapPin />
                </div>
                <div
                  onClick={() => setContactType('email')}
                  className="cursor-pointer rounded-lg bg-amber-400 p-5 text-white shadow-md"
                >
                  <Mail />
                </div>
                <div
                  onClick={() => setContactType('phone')}
                  className="cursor-pointer rounded-lg bg-amber-400 p-5 text-white shadow-md"
                >
                  <Phone />
                </div>
              </div>
              <div
                className="mb-4 flex items-center justify-center space-x-3 rounded-lg border bg-gray-100 p-4 text-sm text-gray-700"
                role="alert"
              >
                {contactType === 'location' && (
                  <>
                    <MapPin /> <span> {resumeDetails.address} </span>
                  </>
                )}
                {contactType === 'email' && (
                  <>
                    <Mail /> <span> {resumeDetails.contacts.email} </span>
                  </>
                )}
                {contactType === 'phone' && (
                  <>
                    <Phone /> <span> {resumeDetails.contacts.phone} </span>
                  </>
                )}
              </div>
            </motion.div>
            <div className="hidden flex-row items-center justify-center space-y-0 lg:flex lg:flex-col lg:items-start lg:space-y-5">
              <motion.div
                variants={fadeInUp}
                className="flex flex-row space-x-5"
              >
                <div className="rounded-lg bg-amber-400 p-4 text-white shadow-md">
                  <MapPin />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Location</span>
                  <span className="text-sm">{resumeDetails.address}</span>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex flex-row space-x-5"
              >
                <div className="rounded-lg bg-amber-400 p-4 text-white shadow-md">
                  <Mail />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">
                    Email Address
                  </span>
                  <span className="text-sm">
                    {resumeDetails.contacts.email}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-row space-x-5"
              >
                <div className="rounded-lg bg-amber-400 p-4 text-white shadow-md">
                  <Phone />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">
                    Contact Number
                  </span>
                  <span className="text-sm">
                    {resumeDetails.contacts.phone}
                  </span>
                </div>
              </motion.div>
            </div>
            <hr className="block lg:hidden" />
            <div className="hidden space-y-2 lg:block">
              <motion.div variants={fadeInUp}>
                <span className="text-sm font-semibold text-amber-400">
                  OTHERS
                </span>
              </motion.div>
              <div className="flex flex-row space-x-2">
                <motion.div
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link href={resumeDetails.socials.github} passHref>
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link href={resumeDetails.socials.linkedin} passHref>
                    <LinkedinIcon className="h-5 w-5" />
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
                    <GoogleIcon className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex w-full max-w-md flex-col space-y-6 rounded-lg border bg-gray-100 p-5 py-8 shadow-lg"
          >
            <div className="w-full text-left">
              <label
                htmlFor="default-input"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                id="default-input"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="w-full text-left">
              <label
                htmlFor="default-input"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                id="default-input"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="w-full text-left">
              <label
                htmlFor="default-input"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex w-full flex-row-reverse">
              <button
                type="button"
                className="flex items-center space-x-1 rounded-lg bg-amber-400 px-3 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-300"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  )
}

export default Contact
