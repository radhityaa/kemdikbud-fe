import React from 'react'
import { NavLink } from 'react-router-dom'
import IconArrowForward from '../assets/icons/IconArrowForward'

export default function ProfilePpidItems(props) {
    const { url, title } = props

    return (
        <NavLink to={url}>
            <div className="flex items-center justify-between md:w-2/6 text-blue-primary hover:underline my-3">
                <span>{title}</span>
                <IconArrowForward />
            </div>
        </NavLink>
    )
}
