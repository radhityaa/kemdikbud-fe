import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoFacebook from '../../assets/icons/facebook.jsx'
import LogoInstagram from '../../assets/icons/instagram.jsx'
import LogoTwitter from '../../assets/icons/twitter.jsx'
import LogoWhatsApp from '../../assets/icons/whatsapp.jsx'
import LogoYouTube from '../../assets/icons/youtube.jsx'

export default function Header() {
    return (
        <header className='bg-blue-dark h-12'>
            <div className="container px-3 md:px-0">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-5 '>
                        <NavLink to={'#'}><LogoFacebook /></NavLink>
                        <NavLink to={'#'}><LogoInstagram /></NavLink>
                        <NavLink to={'#'}><LogoWhatsApp /></NavLink>
                        <NavLink to={'#'}><LogoTwitter /></NavLink>
                        <NavLink to={'#'}><LogoYouTube /></NavLink>
                    </div>
                    <NavLink to={'#'} className='bg-[#FAAA48] text-xl font-semibold text-white px-14 py-2.5 hover:bg-blue-primary transition duration-300 ease-in-out'>
                        PPID
                    </NavLink>
                </div>
            </div>
        </header>
    )
}
