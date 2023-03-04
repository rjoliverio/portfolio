import Link from 'next/link'
import React, { FC } from 'react'
import { ChevronRight, Folder } from 'react-feather'

type Props = {
  title: string
}

const PortfolioBreadcrumb: FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className="flex w-full text-left" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 "
          >
            <Folder className="h-4 w-4" />
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <div className="flex items-center space-x-2 md:space-x-3">
            <ChevronRight className="h-5 w-5 text-gray-400" />
            <span className="ml-1 text-xs  text-gray-400">{title}</span>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default PortfolioBreadcrumb
