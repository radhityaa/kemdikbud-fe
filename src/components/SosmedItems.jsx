import React from 'react'

export default function SosmedItems(props) {
    const { icon, title } = props

    return (
        <div className="flex items-center gap-3">
            <div>{icon}</div>
            <div>{title}</div>
        </div>
    )
}
