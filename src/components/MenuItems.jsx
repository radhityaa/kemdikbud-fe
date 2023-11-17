import React from 'react'
import { NavLink } from 'react-router-dom'
import IconArrowForward from '../assets/icons/IconArrowForward'

export default function MenuItems(props) {
    const { url, title, w = 'md:w-2/6' } = props

    return (
        <NavLink to={url}>
            <div className={`flex items-center justify-between ${w} text-blue-primary hover:underline my-3`}>
                <span>{title}</span>
                <IconArrowForward />
            </div>
        </NavLink>
    )
}
