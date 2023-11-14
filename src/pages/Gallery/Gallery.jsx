import React from 'react'
import App from '../Layout/App'
import ContentHeader from '../../components/ContentHeader'
import CaraoselGallery from '../../components/CaraoselGallery'
import MyCard from '../../components/MyCard'

import Image1 from '../../assets/images/galery/1.png'
import Image2 from '../../assets/images/galery/2.png'
import Image3 from '../../assets/images/galery/3.jpg'
import Image4 from '../../assets/images/galery/4.png'
import Image5 from '../../assets/images/galery/5.png'
import Image6 from '../../assets/images/galery/6.png'
import Pagination from '../../components/Pagination'

export default function Gallery() {
    return (
        <App title={'Galeri'}>
            <ContentHeader text={'Galeri'} />

            <CaraoselGallery />

            <div className="grid grid-cols-3 py-10 gap-10">
                <MyCard img={Image1} description='Foto Bersama Pegawai BP PAUD dan Dikmas Sulteng' />
                <MyCard img={Image2} description='Penerimaan SK dan Penghargaan pegawai BP PAUD dan Dikmas Sulteng' />
                <MyCard img={Image3} description='Pembacaan Doa pada Upacara Hari Pendidikan Nasional Di Kampus BP PAUD dan Dikmas Sulawesi Tengah' />
                <MyCard img={Image4} description='Pelaksanaan Upacara Hari Pendidikan Nasional Di Kampus BP PAUD dan Dikmas Sulawesi Tengah' />
                <MyCard img={Image5} description='Pelaksanaan Upacara Hari Pendidikan Nasional Di Kampus BP PAUD dan Dikmas Sulawesi Tengah' />
                <MyCard img={Image6} description='Upacara Berlangsung Khidmat dengan Pembina Upacara Kepala BP PAUD dan Dikmas Sulawesi Tengah' />
            </div>

            <div>
                <Pagination />
            </div>
        </App>
    )
}
