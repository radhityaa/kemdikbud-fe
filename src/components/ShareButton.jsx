import React from 'react'
import IconFacebook from '../assets/icons/IconFacebook'
import IconTwitter from '../assets/icons/IconTwitter'
import IconLinkedin from '../assets/icons/IconLinkedin'
import IconWhatsapp from '../assets/icons/IconWhatsapp'
import { NavLink } from 'react-router-dom'

export default function ShareButton() {
    return (
        <div className="flex items-center gap-5 py-3">
            <NavLink to={'#'}>
                <div className='bg-gray-200 rounded-lg px-4 py-4'>
                    <IconFacebook />
                </div>
            </NavLink>
            <NavLink to={'#'}>
                <div className='bg-gray-200 rounded-lg px-4 py-4'>
                    <IconTwitter />
                </div>
            </NavLink>
            <NavLink to={'#'}>
                <div className='bg-gray-200 rounded-lg px-4 py-4'>
                    <IconLinkedin />
                </div>
            </NavLink>
            <NavLink to={'#'}>
                <div className='bg-gray-200 rounded-lg px-4 py-4'>
                    <IconWhatsapp />
                </div>
            </NavLink>
        </div>
    )
}
