import React from 'react'
import Icon from '../../assets/logos/icon.png'
import DropdownNav from '../../components/DropdownNav'
import MobileNav from './MobileNav'
import { profiles, publikasi, services, ppids, akuntabilitas } from '../../dummy/NavbarItems'

export default function Navbar() {

    return (
        <nav className='bg-white shadow-md border-b-2 w-full'>
            <div className="container py-4 md:py-1 px-6 md:px-0">
                <MobileNav />
                <div className="md:flex items-center hidden">
                    <div className='w-2/6'>
                        <img src={Icon} height={50} width={50} />
                    </div>
                    <div className="space-x-10">
                        <DropdownNav links={profiles} title={'Profil'} />
                        <DropdownNav links={publikasi} title={'Publikasi'} />
                        <DropdownNav links={services} title={'Layanan'} />
                        <DropdownNav links={ppids} title={'PPID'} />
                        <DropdownNav links={akuntabilitas} title={'Akuntabilitas'} />
                    </div>
                </div>
            </div>
        </nav>
    )
}