import React from 'react'
import IconDate from '../assets/icons/IconDate'
import IconChat from '../assets/icons/IconChat'
import { NavLink } from 'react-router-dom'

export default function MyCard(props) {
    const { img, title, titleClass = 'text-blue-dark font-semibold line-clamp-3 hover:underline', description, date, time, commentCount, url } = props

    return (
        <div className='bg-white rounded shadow-lg'>
            <NavLink to={url}>
                <img src={img} />
            </NavLink>
            <div className='p-5 space-y-3'>
                <NavLink to={url}>
                    <h1 className={titleClass}>{title}</h1>
                </NavLink>
                {description ? (
                    <p className='text-slate-700 line-clamp-3'>{description}</p>
                ) : null}
                {date || time || commentCount ? (
                    <div className='flex flex-col gap-2 p-4'>
                        <div className='flex items-center gap-2 text-slate-700'>
                            <IconDate />
                            <span>{date}</span> <span>pkl. {time}</span>
                        </div>
                        <div className='flex items-center gap-2 text-slate-700'>
                            <IconChat />
                            <span>{commentCount} Komentar</span>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
