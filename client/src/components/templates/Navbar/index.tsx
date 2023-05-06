import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LogOut, Menu as MenuIcon } from 'react-feather'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { navLinks } from '~/shared/json/links'
import Image from 'next/image'
import { useAuth } from '~/shared/hooks/useAuth'

const Navbar = () => {
  const router = useRouter()
  const { handleCheckAuth, handleAuthSignout } = useAuth()
  const { data: user } = handleCheckAuth()
  const { mutate: signOut } = handleAuthSignout()
  return (
    <nav>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between py-2 px-5 md:p-0 md:px-5 lg:px-2">
        <Link href="/" className="hidden items-center md:flex">
          <Image
            src="/images/rj-logo-4.png"
            className="w-36"
            width={144}
            height={33}
            alt="RJ Logo"
            blurDataURL="/images/rj-logo-4.png"
            placeholder="blur"
          />
        </Link>
        <div className="hidden w-full md:order-1 md:flex md:w-auto" id="navbar-default">
          <Menu as="div" className="relative inline-block w-full">
            <div className="flex items-center">
              <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 p-4  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium ">
                {navLinks.map((link, i) => (
                  <li key={i} className="cursor-pointer">
                    <Link href={link.path}>
                      <span
                        className={`block py-2 pl-3 pr-4 ${
                          router.pathname.match(new RegExp(`^${link.path}$`, 'i'))?.length
                            ? 'border-b border-amber-400 text-amber-400'
                            : router.pathname.match(new RegExp(`^/about/skills$`, 'i')) &&
                              link.path === '/about'
                            ? 'border-b border-amber-400 text-amber-400'
                            : router.pathname.includes('portfolio') && link.path === '/portfolio'
                            ? 'border-b border-amber-400 text-amber-400'
                            : 'text-gray-500 '
                        }  hover:text-amber-400 md:p-0`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Menu.Button className="inline-flex w-full justify-center rounded-full border-2 border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {Boolean(user) && (
                  <Image
                    className="h-8 w-8 rounded-full "
                    width={32}
                    height={32}
                    src={user?.avatar as string}
                    alt="User dropdown"
                  />
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-20 inline-block w-full max-w-[200px] rounded-lg bg-gray-200">
                <Menu.Item>
                  <div className="border-b border-gray-300 px-4 py-3 text-sm text-gray-900">
                    <div>{user?.name}</div>
                    <div className="truncate text-xs">{user?.email}</div>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="p-2">
                    <button
                      onClick={() => signOut()}
                      className="flex w-full items-center justify-center space-x-1 rounded-md bg-slate-400 p-2 text-center text-sm text-white hover:bg-slate-500"
                    >
                      <LogOut className="h-5 w-4" /> <span>Sign out</span>
                    </button>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <Menu as="div" className="relative block w-full text-left md:hidden">
          <div className="flex justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/rj-logo-2.png"
                blurDataURL="/images/rj-logo-2.png"
                className="w-8"
                width={32}
                height={32}
                alt="RJ Logo"
              />
            </Link>
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <MenuIcon className="h-6 w-6" />
              </Menu.Button>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-20 mt-4 inline-block w-full origin-center bg-transparent ">
              <div className="w-full space-y-2 rounded-md bg-white p-2 shadow">
                {navLinks.map((link, i) => (
                  <Menu.Item key={i}>
                    <Link
                      href={link.path}
                      className={`${
                        router.pathname.match(new RegExp(`^${link.path}$`, 'i'))?.length
                          ? 'bg-amber-400 text-white'
                          : router.pathname.match(new RegExp(`^/about/skills$`, 'i')) &&
                            link.path === '/about'
                          ? 'bg-amber-400 text-white'
                          : 'bg-gray-100'
                      } group  flex w-full max-w-7xl items-center rounded-md px-5 py-2 text-sm font-medium hover:bg-amber-200`}
                    >
                      {link.name}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar
