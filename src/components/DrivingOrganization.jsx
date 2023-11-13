import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Image1 from '../assets/images/op1.jpg'
import NewsBlock from './NewsBlock'
import data from '../dummy/DrivingOrganization.json'
import LineCustom from './LineCustom'

export default function DrivingOrganization() {

    return (
        <>
            <div className="grid md:grid-cols-2 gap-14">
                <div>
                    {/* NOTE - Organisasi Penggerak */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className='home__title'>Organisasi Penggerak</h1>
                            <LineCustom />
                        </div>
                        <NavLink to={'#'} className='btn-btn-more'>Selengkapnya</NavLink>
                    </div>

                    {data.map((item) => (
                        <div className="flex py-10 gap-5">
                            <Fragment key={item.id}>
                                <NewsBlock url={item.url} title={item.title} description={item.description} date={item.date} time={item.time} image={Image1} />
                            </Fragment>
                        </div>
                    ))}
                </div>

                <div>
                    {/* NOTE - Sekolah Penggerak */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className='home__title'>Sekolah Penggerak</h1>
                            <LineCustom />
                        </div>
                        <NavLink to={'#'} className='btn-btn-more'>Selengkapnya</NavLink>
                    </div>

                    {data.map((item) => (
                        <div className="flex py-10 gap-5">
                            <Fragment key={item.id}>
                                <NewsBlock url={item.url} title={item.title} description={item.description} date={item.date} time={item.time} image={Image1} />
                            </Fragment>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
