import React from 'react'

export default function ContentHeader({ text }) {
    return (
        <div className='space-y-2 py-16 mb-5'>
            <h1 className="text-3xl font-semibold">{text}</h1>
            <p className='flex gap-3'><span className='text-slate-500'>Halaman</span> | <span>{text}</span></p>
        </div>
    )
}
