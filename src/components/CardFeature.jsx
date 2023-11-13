import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CardFeature({ url, icon, title }) {
    return (
        <NavLink to={url} className='bg-blue-300 rounded-md shadow-xl p-6'>
            <div className='flex items-center gap-3'>
                <span>{icon}</span>
                <h1 className='text-lg font-medium'>{title}</h1>
            </div>
        </NavLink>
    )
}
