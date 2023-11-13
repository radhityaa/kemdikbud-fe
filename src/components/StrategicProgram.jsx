import React from 'react'
import { NavLink } from 'react-router-dom'
import Thumbnail from '../assets/images/thumbnail.jpg'
import CardContent from './CardContent'
import data from '../dummy/StrategicData.json'
import LineCustom from './LineCustom'

export default function StrategicProgram() {
    return (
        <>
            {/* NOTE - Title */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className='home__title'>Program Strategis</h1>
                    <LineCustom />
                </div>
                <NavLink to={'#'} className='btn-btn-more'>Selengkapnya</NavLink>
            </div>

            {/* NOTE - Card List */}
            <div className='py-10'>
                <div className="grid md:grid-cols-3 gap-5">
                    {data.map((item) => (
                        <CardContent image={Thumbnail} date={item.date} time={item.time} title={item.title} description={item.description} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}
