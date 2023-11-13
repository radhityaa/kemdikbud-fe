import React from 'react'
import { NavLink } from 'react-router-dom'
import Calendar from '../assets/icons/Calendar'
import Image1 from '../assets/images/op1.jpg'
import Image2 from '../assets/images/op2.jpeg'
import Image3 from '../assets/images/op3.jpeg'
import Image4 from '../assets/images/op4.jpeg'

export default function NewsBlock({ url, title, description, date, time, image }) {

    return (
        <>
            <div className='w-fit'>
                <div
                    className='w-[110px] h-[88px] overflow-hidden'>
                    <div className="w-full h-full flex  justify-center items-center backdrop-blur-sm">
                        <img src={image} className='mx-auto w-full h-full' />
                    </div>
                </div>
            </div>

            <div className='w-full space-y-2'>
                <NavLink to={url} className='hover:text-blue-primary transition duration-200 ease-in'>
                    <p className='font-semibold text-lg line-clamp-3'>{title}</p>
                </NavLink>
                <p className='line-clamp-4 text-slate-700 text-justify'>{description}</p>

                <div className="flex items-center gap-2">
                    <Calendar />
                    <span className='text-slate-700 font-semibold text-sm'>{date} {time}</span>
                </div>
            </div>
        </>
    )
}
