import React from 'react'
import Calendar from '../assets/icons/Calendar'
import { NavLink } from 'react-router-dom'

export default function OtherNews(props) {
    const { data } = props

    return (
        <div>
            <h1 className='text-xl md:text-lg font-semibold text-slate-800 mb-3'>Berita Lainnya</h1>

            {data.map((item, index) => (
                <NavLink to={item.url}>
                    <div className='md:my-3 my-5'>
                        <div className="md:flex gap-5 md:h-24" key={index}>
                            <div className="rounded-lg overflow-hidden">
                                <img src={item.image} className='md:h-24' />
                            </div>
                            <div className="flex-col space-y-2 text-blue-dark font-semibold">
                                <div className="flex items-center gap-2 mt-5 md:mt-0">
                                    <Calendar />
                                    <span className='text-slate-700 md:text-sm'>{item.date}</span>
                                </div>
                                <div className='md:w-64'>
                                    <span className='line-clamp-3 leading-5'>{item.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
