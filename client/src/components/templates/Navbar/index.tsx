import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Menu as MenuIcon } from 'react-feather'
import { navLinks } from '~/shared/json/links'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="flex flex-wrap max-w-4xl items-center justify-between mx-auto py-2 px-5 lg:px-2 md:p-0 md:px-5">
        <a href="#" className="items-center hidden md:flex">
          <img src="/images/rj-logo-4.png" className=" w-36" alt="RJ Logo" />
        </a>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="w-6 h-6" />
        </button> */}
        <div
          className="hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`block py-2 pl-3 pr-4 ${
                    link.name === 'Home'
                      ? 'text-amber-400 border-b border-amber-400'
                      : 'text-gray-500 '
                  }  md:p-0 hover:text-amber-400`}
                  aria-current="page"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Menu as="div" className="relative text-left w-full block md:hidden">
          <div className="flex justify-between">
            <a href="https://flowbite.com/" className="items-center flex">
              <img src="/images/rj-logo-2.png" className=" w-8" alt="RJ Logo" />
            </a>
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <MenuIcon className="w-6 h-6" />
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
            <Menu.Items className="absolute inline-block w-full bg-transparent z-20 mt-4 origin-center ">
              <div className="p-2 w-full bg-white rounded-md space-y-2 shadow">
                {navLinks.map((link, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-600'
                        } group bg-gray-100 hover:bg-amber-400 flex font-medium w-full max-w-7xl items-center px-5 py-2 text-sm rounded-md`}
                      >
                        {link.name}
                      </button>
                    )}
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
