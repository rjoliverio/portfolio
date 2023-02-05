import { useState } from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'react-feather'

import { fadeInUp } from '~/shared/animation'
import Layout from '~/components/templates/Layout'
import { GithubIcon } from '~/shared/icons/GithubIcon'
import { GoogleIcon } from '~/shared/icons/GoogleIcon'
import { LinkedinIcon } from '~/shared/icons/LinkedinIcon'
import { resumeDetails } from '~/shared/json/resumeDetails'

const Contact: NextPage = () => {
  const [contactType, setContactType] = useState<string>('location')
  return (
    <Layout metaTitle="Page Under Construction">
      <section className="h-full w-full z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center p-5 lg:space-x-8 space-x-0 space-y-5 lg:space-y-0">
          <div className="flex flex-col w-full text-gray-500 text-left space-y-5 max-w-md">
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-amber-400">
                CONTACT US
              </span>
              <span className="font-semibold text-3xl text-gray-700">
                Get In Touch With RJ
              </span>
            </div>
            <span className="text-sm text-gray-700 text-justify">
              Should you have any questions regarding the resume, portfolios or
              projects, you may reach me at the contact details provided below
              or send me a message by the form. I will get back to you within 24
              hours.
            </span>
            <div className="block lg:hidden space-y-3">
              <div className="space-x-8 flex justify-center">
                <div
                  onClick={() => setContactType('location')}
                  className="bg-amber-400 p-5 text-white cursor-pointer rounded-lg shadow-md"
                >
                  <MapPin />
                </div>
                <div
                  onClick={() => setContactType('email')}
                  className="bg-amber-400 p-5 text-white cursor-pointer rounded-lg shadow-md"
                >
                  <Mail />
                </div>
                <div
                  onClick={() => setContactType('phone')}
                  className="bg-amber-400 p-5 text-white cursor-pointer rounded-lg shadow-md"
                >
                  <Phone />
                </div>
              </div>
              <div
                className="p-4 mb-4 text-sm text-gray-700 flex items-center justify-center space-x-3 rounded-lg bg-gray-100 border"
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
            </div>
            <div className="hidden lg:flex lg:flex-col flex-row lg:space-y-5 space-y-0 items-center justify-center lg:items-start">
              <div className="flex flex-row space-x-5">
                <div className="bg-amber-400 p-4 text-white rounded-lg shadow-md">
                  <MapPin />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 font-semibold">Location</span>
                  <span className="text-sm">{resumeDetails.address}</span>
                </div>
              </div>
              <div className="flex flex-row space-x-5">
                <div className="bg-amber-400 p-4 text-white rounded-lg shadow-md">
                  <Mail />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 font-semibold">
                    Email Address
                  </span>
                  <span className="text-sm">
                    {resumeDetails.contacts.email}
                  </span>
                </div>
              </div>
              <div className="flex flex-row space-x-5">
                <div className="bg-amber-400 p-4 text-white rounded-lg shadow-md">
                  <Phone />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 font-semibold">
                    Contact Number
                  </span>
                  <span className="text-sm">
                    {resumeDetails.contacts.phone}
                  </span>
                </div>
              </div>
            </div>
            <hr className="lg:hidden block" />
            <div className="space-y-2 hidden lg:block">
              <span className="font-semibold text-sm text-amber-400">
                OTHERS
              </span>
              <div className="flex flex-row space-x-2">
                <motion.div
                  variants={fadeInUp}
                  className="bg-white cursor-pointer shadow p-2 rounded-full border"
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="bg-white cursor-pointer shadow p-2 rounded-full border"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="bg-white cursor-pointer shadow p-2 rounded-full border"
                >
                  <GoogleIcon className="w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-gray-100 max-w-md w-full shadow-lg border rounded-lg py-8 space-y-6">
            <div className="w-full text-left">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="w-full text-left">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="w-full text-left">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="w-full flex flex-row-reverse">
              <button
                type="button"
                className="focus:outline-none shadow-md flex space-x-1 items-center text-white bg-amber-400 hover:scale-110 transition-all duration-300 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-3 py-2.5"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
