import React, { useEffect, useRef, useState } from 'react'
import Icon from '../../assets/logos/icon.png'
import DropdownNav from '../../components/DropdownNav'
import { profiles, publikasi, services, ppids, akuntabilitas } from '../../dummy/NavbarItems'
import { NavLink } from 'react-router-dom'

export default function MobileNav() {
    const [isActive, setIsActive] = useState(false)

    function toggleHamburger() {
        setIsActive(!isActive)
    }

    return (
        <>
            <div className='md:hidden'>
                <div className="flex items-center justify-between relative">
                    <div>
                        <NavLink to='/'>
                            <img src={Icon} height={50} width={50} />
                        </NavLink>
                    </div>

                    <button className={isActive ? 'block hamburger-active' : 'block'} onClick={toggleHamburger}>
                        <span className='origin-top-left hamburger-line transition duration-300 ease-in-out'></span>
                        <span className='hamburger-line transition duration-300 ease-in-out'></span>
                        <span className='origin-bottom-left hamburger-line transition duration-300 ease-in-out'></span>
                    </button>
                </div>
            </div>
            <div className={isActive ? 'bg-white h-fit w-full shadow-xl rounded-b-lg left-0 right-0 top-[130px] z-30 absolute p-5 space-y-5 transition-all duration-300 ease-in-out' : 'hidden transition-all duration-300 ease-in-out'}>
                <DropdownNav links={profiles} title={'Profil'} />
                <DropdownNav links={publikasi} title={'Publikasi'} />
                <DropdownNav links={services} title={'Layanan'} />
                <DropdownNav links={ppids} title={'PPID'} />
                <DropdownNav links={akuntabilitas} title={'Akuntabilitas'} />
            </div>
        </>
    )
}
