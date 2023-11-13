import React from 'react'
import { NavLink } from 'react-router-dom'
import ArrowRight from '../assets/icons/ArrowRight'

export default function CardContent({ date, time, image, title, description, url }) {
    return (
        <div className='bg-white rounded-md shadow-xl h-auto pb-5 relative'>

            {/* NOTE - Header */}
            <img src={image} className='home__card_image' />
            <div className='absolute -top-4 right-3'>
                <div className='text-center bg-blue-dark border-2 shadow-lg text-white text-sm font-semibold rounded px-3 py-1'>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>

            {/* NOTE - Content */}
            <div className='p-4 space-y-3'>
                <NavLink to={url} className='hover:text-blue-primary transition duration-200 ease-in'>
                    <p className='font-semibold text-lg line-clamp-3'>{title}</p>
                </NavLink>

                <p className='line-clamp-5 text-slate-700'>{description}</p>

                {/* NOTE - Detail */}
                <NavLink to={url}>
                    <div className='flex items-center gap-2 text-slate-700 underline py-3'>
                        <span className='text-lg'>Baca Selengkapnya</span>
                        <span className='mt-2'><ArrowRight /></span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
