import moment from 'moment'
import type { NextPage } from 'next'
import React, { useEffect, useRef, useState } from 'react'
import { AlertCircle, Calendar, GitHub, Search } from 'react-feather'

import Layout from '~/components/templates/Layout'
import { portfolio } from '~/shared/json/portfolio'
import { IPortfolio } from '~/shared/interface/IPortfolio'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Portfolio: NextPage = () => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const [projects, setProjects] = useState<IPortfolio[]>(portfolio)
  const searchInput = useRef<HTMLInputElement | null>(null)
  console.log(search)
  const handleSearchOnClick = (): void => {
    setSearch(searchInput.current?.value as string)
    setProjects(portfolio)
  }
  const handleSearchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setSearch(searchInput.current?.value as string)
      setProjects(portfolio)
    }
  }
  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '') {
      setSearch('')
      setProjects(portfolio)
    }
  }
  useEffect(() => {
    const temp = [
      ...projects.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())),
    ]
    setProjects(temp)
  }, [search])

  return (
    <Layout metaTitle="Page Under Construction">
      <section className="z-10 my-5 h-full w-full">
        <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-center space-x-5 ">
          <div className="flex h-full w-full flex-col items-center space-y-5">
            <div className="flex h-full w-full justify-between">
              <div className="flex w-full max-w-[10rem] flex-col text-left">
                <span className="text-xl font-medium md:text-2xl">My Projects</span>
                <div className="flex items-center space-x-1 text-xs md:text-sm">
                  <GitHub className="h-4 w-4" /> <span>Stored on GitHub</span>
                </div>
              </div>
              <div className="flex w-full max-w-lg items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    ref={searchInput}
                    onChange={handleSearchOnChange}
                    defaultValue={search}
                    onKeyDown={handleSearchOnEnter}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search"
                  />
                </div>
                <button
                  onClick={handleSearchOnClick}
                  className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
            <hr className="w-full" />
            <div className="z-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {projects.length ? (
                projects.map((item) => (
                  <div
                    key={item.id}
                    className="flex max-w-xs flex-col justify-between space-y-3 rounded-lg border bg-white p-4 shadow-sm shadow-indigo-100"
                  >
                    <div className="space-y-3">
                      <div className="relative h-56 w-full rounded-md ">
                        <Image
                          alt="Home"
                          src={item.image}
                          className="object-cover"
                          fill
                          blurDataURL={item.image}
                          placeholder="blur"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-left text-sm font-semibold">
                          <GitHub className="h-4 w-4" />{' '}
                          <span className="line-clamp-1" title={item.title}>
                            {item.title}
                          </span>
                        </div>
                        <div className="text-left text-xs line-clamp-3">{item.description}</div>
                      </div>
                    </div>
                    <div className=" flex items-center text-xs">
                      <div className=" flex w-full flex-row items-center justify-between ">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <p>{moment(new Date(item.finished_date)).fromNow()}</p>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => router.push(`portfolio/${item.id}`)}
                            className="rounded-md bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 "
                          >
                            Read more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 mt-5 flex w-full flex-row items-center space-x-2 text-slate-500">
                  <AlertCircle />
                  <span className="text-lg font-medium ">No projects found.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
