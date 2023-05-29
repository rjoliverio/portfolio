import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Mail, MapPin, Phone, Send } from 'react-feather'
import createPersistedState from 'use-persisted-state'

import { fadeInUp, routeAnimation, stagger } from '~/shared/animation'
import Layout from '~/components/templates/Layout'
import { GithubIcon } from '~/shared/icons/GithubIcon'
import { GoogleIcon } from '~/shared/icons/GoogleIcon'
import { IContact } from '~/shared/interface/IContact'
import { LinkedinIcon } from '~/shared/icons/LinkedinIcon'
import { resumeDetails } from '~/shared/json/resumeDetails'
import { ContactUsSchema } from '~/shared/validations/ContactUsSchema'
import { useContact } from '~/shared/hooks/useContact'
import LoadingIcon from '~/shared/icons/LoadingIcon'

const MotionDiv = dynamic(() => import('framer-motion').then((module) => module.motion.div), {
  ssr: false,
})

const Contact: NextPage = () => {
  const useCounterState = createPersistedState('contactLoadCount')
  const [count, setCount] = useCounterState()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContact>({
    resolver: yupResolver(ContactUsSchema),
  })
  const { handleSendMessage } = useContact()
  const { mutate, isLoading, isSuccess } = handleSendMessage(reset)
  const onSubmit = async (data: IContact) => {
    mutate(data)
  }
  const [contactType, setContactType] = useState<string>('location')

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined
    if ((count as number) > 0) {
      interval = setInterval(() => {
        setCount((prevCount: number) => prevCount - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [count])
  useEffect(() => {
    if (isSuccess) setCount(5)
  }, [isSuccess])

  return (
    <Layout metaTitle="Rj Oliverio | Contact Us">
      <section className="z-10 h-full w-full">
        <MotionDiv
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col items-center justify-center space-x-0 space-y-5 p-5 lg:flex-row lg:space-x-8 lg:space-y-0"
        >
          <MotionDiv
            variants={stagger}
            className="flex w-full max-w-md flex-col space-y-5 text-left text-gray-500"
          >
            <MotionDiv variants={fadeInUp} className="flex flex-col">
              <span className="text-sm font-semibold text-amber-400">CONTACT US</span>
              <span className="text-3xl font-semibold text-gray-700">Get In Touch With RJ</span>
            </MotionDiv>
            <MotionDiv variants={fadeInUp} className="text-justify text-sm text-gray-700">
              Should you have any questions regarding the resume, portfolios or projects, you may
              reach me at the contact details provided below or send me a message by the form. I
              will get back to you within 24 hours.
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="block space-y-3 lg:hidden">
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
            </MotionDiv>
            <div className="hidden flex-row items-center justify-center space-y-0 lg:flex lg:flex-col lg:items-start lg:space-y-5">
              <MotionDiv variants={fadeInUp} className="flex flex-row space-x-5">
                <div className="rounded-lg bg-amber-400 p-4 text-white shadow-md">
                  <MapPin />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Location</span>
                  <span className="text-sm">{resumeDetails.address}</span>
                </div>
              </MotionDiv>
              <MotionDiv variants={fadeInUp} className="flex flex-row space-x-5">
                <div className="rounded-lg bg-amber-400 p-4 text-white shadow-md">
                  <Mail />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Email Address</span>
                  <span className="text-sm">{resumeDetails.contacts.email}</span>
                </div>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} className="flex flex-row space-x-5">
                <div className="rounded-lg bg-amber-400 p-4 text-white shadow-md">
                  <Phone />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Contact Number</span>
                  <span className="text-sm">{resumeDetails.contacts.phone}</span>
                </div>
              </MotionDiv>
            </div>
            <hr className="block lg:hidden" />
            <div className="hidden space-y-2 lg:block">
              <MotionDiv variants={fadeInUp}>
                <span className="text-sm font-semibold text-amber-400">OTHERS</span>
              </MotionDiv>
              <div className="flex flex-row space-x-2">
                <MotionDiv
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link href={resumeDetails.socials.github} passHref>
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                </MotionDiv>
                <MotionDiv
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link href={resumeDetails.socials.linkedin} passHref>
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                </MotionDiv>
                <MotionDiv
                  variants={fadeInUp}
                  className="cursor-pointer rounded-full border bg-white p-2 shadow"
                >
                  <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${resumeDetails.socials.gmail}`}
                    passHref
                  >
                    <GoogleIcon className="h-5 w-5" />
                  </Link>
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
          <MotionDiv
            variants={fadeInUp}
            className="w-full max-w-md rounded-lg border bg-gray-100  shadow-lg"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col space-y-6 rounded-lg p-5 py-8"
            >
              <div className="w-full text-left">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && (
                  <label htmlFor="email" className="mt-1 block text-xs text-gray-700 ">
                    <span className="text-rose-500">{errors.email.message}</span>
                  </label>
                )}
              </div>
              <div className="w-full text-left">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="Enter subject"
                  id="subject"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.subject && (
                  <label htmlFor="subject" className="mt-1 block text-xs text-gray-700 ">
                    <span className="text-rose-500">{errors.subject.message}</span>
                  </label>
                )}
              </div>
              <div className="w-full text-left">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
                {errors.subject && (
                  <label htmlFor="message" className="mt-1 block text-xs text-gray-700 ">
                    <span className="text-rose-500">{errors.message?.message}</span>
                  </label>
                )}
              </div>
              <div className="flex w-full flex-row-reverse">
                <button
                  type="submit"
                  disabled={isLoading || Boolean(count)}
                  className="flex items-center space-x-1 rounded-lg bg-amber-400 px-3 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-300 disabled:bg-gray-400"
                >
                  {isLoading ? (
                    <>
                      <LoadingIcon className="h-4 w-4 fill-amber-400 text-gray-200" />
                      <span>Send Message</span>
                    </>
                  ) : (
                    <>
                      {Boolean(count) ? (
                        <span className="h-5 w-5 rounded-full bg-amber-400 p-0.5 text-xs text-white">
                          {count as number}
                        </span>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </MotionDiv>
        </MotionDiv>
      </section>
    </Layout>
  )
}

export default Contact
