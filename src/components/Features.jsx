import React from 'react'
import Book from '../assets/icons/Book'
import Headset from '../assets/icons/Headset'
import Paper from '../assets/icons/Paper'
import Users from '../assets/icons/Users'
import CardFeature from './CardFeature'

export default function Features() {
    return (
        <div className='grid md:grid-cols-4 mt-10 gap-5'>
            <CardFeature url={'#'} icon={<Headset />} title={'Unit Layanan Terpadu'} />
            <CardFeature url={'#'} icon={<Paper />} title={'Maklumat Pelayanan'} />
            <CardFeature url={'#'} icon={<Users />} title={'Reformasi Birokrasi'} />
            <CardFeature url={'#'} icon={<Book />} title={'AKIP'} />
        </div>
    )
}
