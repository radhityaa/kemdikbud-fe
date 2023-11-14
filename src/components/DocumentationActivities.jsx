import React from 'react'
import MyCard from './MyCard'
import Image1 from '../assets/images/pgp1.jpg'

export default function DocumentationActivities() {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                <MyCard img={Image1} title='Nama Kegiatan Guru Penggerak' titleClass='font-bold text-center' />
                <MyCard img={Image1} title='Nama Kegiatan Guru Penggerak' titleClass='font-bold text-center' />
                <MyCard img={Image1} title='Nama Kegiatan Guru Penggerak' titleClass='font-bold text-center' />
                <MyCard img={Image1} title='Nama Kegiatan Guru Penggerak' titleClass='font-bold text-center' />
                <MyCard img={Image1} title='Nama Kegiatan Guru Penggerak' titleClass='font-bold text-center' />
                <MyCard img={Image1} title='Nama Kegiatan Guru Penggerak' titleClass='font-bold text-center' />
            </div>
        </div>
    )
}
