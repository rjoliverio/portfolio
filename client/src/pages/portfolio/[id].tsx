import moment from 'moment'
import type { NextPage } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Globe, Monitor } from 'react-feather'
import { Tooltip } from 'react-tooltip'

import Layout from '~/components/templates/Layout'
import { routeAnimation } from '~/shared/animation'
import { portfolio } from '~/shared/json/portfolio'
import { GithubIcon } from '~/shared/icons/GithubIcon'
import { VerifiedIcon } from '~/shared/icons/VerifiedIcon'
import { IPortfolio } from '~/shared/interface/IPortfolio'
import PortfolioBreadcrumb from '~/components/templates/PortfolioBreadcrumb'

const MotionDiv = dynamic(() => import('framer-motion').then((module) => module.motion.div), {
  ssr: false,
})

const PortfolioDetails: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState<IPortfolio | null>(null)

  useEffect(() => {
    setProject(portfolio.filter((p) => p.id === parseInt(id as string))[0])
  }, [id])

  return (
    <Layout metaTitle={`Rj Oliverio | ${project?.title as string}`}>
      <Tooltip id="details" />
      <section className="z-10 my-5 h-full w-full">
        <MotionDiv
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center space-y-5"
        >
          <PortfolioBreadcrumb title={project?.title as string} />
          <div className="align-items-center flex w-full flex-row justify-between">
            <div className="flex w-full flex-col space-y-1">
              <div className="flex w-full items-center space-x-2 ">
                <VerifiedIcon className="h-6 w-6 min-w-[24px] fill-blue-500" />
                <h1 className="text-left text-2xl font-medium tracking-wide">{project?.title}</h1>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <span className="font-medium">
                  <Monitor className="h-4 w-4" />
                </span>
                <span
                  data-tooltip-id="details"
                  data-tooltip-content="Development Period"
                  data-tooltip-place="right"
                >
                  {moment(project?.start_date as string).format('MMMM d, YYYY')} -{' '}
                  {moment(project?.finished_date as string).format('MMMM d, YYYY')}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <a
                href={project?.output_link.link as string}
                target="_blank"
                data-tooltip-id="details"
                data-tooltip-content="Visit the app"
                className="rounded-full border bg-white p-1 shadow"
                rel="noreferrer"
              >
                <Globe />
              </a>
              <a
                href={project?.github_link.link as string}
                target="_blank"
                data-tooltip-id="details"
                data-tooltip-content="Visit the repository"
                className="rounded-full border bg-white p-1 shadow"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
          <div className="w-full text-left">{project?.description}</div>
          <div className="rounded-lg border bg-white p-2 shadow-md">
            <Image
              src={project?.image as string}
              width={1000}
              height={550}
              alt={project?.title as string}
              placeholder="blur"
              blurDataURL={`${project?.image as string}`}
              className="rounded-lg bg-gray-100 transition duration-700 ease-in-out"
            />
          </div>
        </MotionDiv>
      </section>
    </Layout>
  )
}

export default PortfolioDetails
