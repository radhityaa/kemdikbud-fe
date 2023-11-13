import React, { Fragment } from 'react'
import LOGO from '../../assets/logos/logo.png'
import Home from '../../assets/icons/Home'
import Phone from '../../assets/icons/Phone'
import Envelop from '../../assets/icons/Envelop'
import CaretRight from '../../assets/icons/CaretRight'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <Fragment>
            <div className='bg-blue-primary'>
                <div className="md:container px-3">
                    <div className="grid md:grid-cols-4 gap-10 text-white py-10">
                        <div className='space-y-4'>
                            <img src={LOGO} />
                            <p className='text-lg font-semibold '>Balai Besar Guru Penggerak Provinsi Sulawesi Tengah - Direktorat Jenderal Guru dan Tenaga Kependidikan - Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi</p>
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-2xl font-bold mb-8'>Hubungi Kami</h1>

                            <div className="flex items-stretch gap-3">
                                <span><Home /></span>
                                <span className='-mt-1 font-semibold'>Jl. Tolambu No. 12, Kamonji, Kota Palu, Sulawesi Tengah, 94223</span>
                            </div>

                            <div className="flex items-stretch gap-3">
                                <span><Phone /></span>
                                <span className='-mt-1 font-semibold'>(0451) - 460291</span>
                            </div>

                            <div className="flex items-stretch gap-3">
                                <span><Envelop /></span>
                                <span className='font-semibold'>bgp@kemdikbud.go.id</span>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <h1 className='text-2xl font-bold mb-8'>Jam Buka</h1>

                            <div className='space-y-2 font-semibold'>
                                <h3>Senin - Kamis : 08:00 - 16:00 WIB</h3>
                                <h3>Jumat : 08:00 - 16:30 WIB</h3>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <h1 className='text-2xl font-bold mb-8'>Tautan Terkait</h1>

                            <div className='space-y-4 font-semibold'>
                                <NavLink to={'#'} className="flex items-center gap-2 hover:underline" target='_blank'>
                                    <span><CaretRight /></span>
                                    <span className='-mt-1'>Kemdikbudristek</span>
                                </NavLink>

                                <NavLink to={'#'} className="flex items-center gap-2 hover:underline" target='_blank'>
                                    <span><CaretRight /></span>
                                    <span className='-mt-1'>Ditjen GTK</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-blue-dark text-center py-4 text-white text-lg font-semibold'>
                © 2023 BGP Provinsi Sulawesi Tengah
            </div>

        </Fragment>
    )
}
