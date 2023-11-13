import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import ArrowDown from '../assets/icons/ArrowDown'
import { NavLink } from 'react-router-dom'

export default function DropdownNav({ links, title }) {

    return (
        <>
            <Menu as="div" className="relative md:inline-block text-left z-10">
                <div>
                    <Menu.Button className="flex items-center gap-1 hover:border-b-2 border-blue-primary md:text-base text-lg">
                        {title}
                        <span className='mt-1'><ArrowDown /></span>
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
                    <Menu.Items className="md:absolute w-full md:right-0 mt-3 md:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {links.map((link, index) => (
                            <div className="px-1 py-1" key={index}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to={link.url}
                                            className={`${active ? 'bg-blue-primary text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 md:text-sm`}
                                        >
                                            {link.label}
                                        </NavLink>
                                    )}
                                </Menu.Item>
                            </div>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
