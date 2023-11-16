import React from 'react'
import App from '../Layout/App'
import ContentHeader from '../../components/ContentHeader'
import ImageNews1 from '../../assets/images/news/news1.png'
import ImageNews2 from '../../assets/images/news/news2.png'
import ImageNews3 from '../../assets/images/news/news3.png'
import MyCard from '../../components/MyCard'
import Pagination from '../../components/Pagination'

export default function Berita() {
    return (
        <App title={'Berita'}>
            <ContentHeader text={'Berita'} />

            <div className='grid md:grid-cols-3 gap-10'>
                <MyCard img={ImageNews3} url='/berita/1' title='Pelaksanaan Workshop Enkulturasi STEM Education Leadership Guru SMP di National Institute of Education (NIE)' description='Kementerian Pendidikan Kebudayaan Riset dan Teknologi, Direktorat Jenderal Guru dan Tenaga Kependidikan melalui Direktorat' date='31 Oktober 2023' time='10:43' />
                <MyCard img={ImageNews2} url='/berita/1' title='Kemendikbudristek Gelar Apresiasi Guru dan Tenaga Kependidikan 2023' description='Jakarta, Kemendikbudristek – Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (Kemendikbudristek), melalui' date='21 September 2023' time='16:27' />
                <MyCard img={ImageNews1} url='/berita/1' title='Kemendikbudristek Buka Pendaftaran Program Microcredential CS50X Indonesia-Harvard University Digital' description='Kemendikbudristek Buka Pendaftaran Program Microcredential CS50X Indonesia- Harvard University Digital Skill Tahun 2023' date='25 Agustus 2023' time='16:52' />
                <MyCard img={ImageNews3} url='/berita/1' title='Pelaksanaan Workshop Enkulturasi STEM Education Leadership Guru SMP di National Institute of Education (NIE)' description='Kementerian Pendidikan Kebudayaan Riset dan Teknologi, Direktorat Jenderal Guru dan Tenaga Kependidikan melalui Direktorat' date='31 Oktober 2023' time='10:43' />
                <MyCard img={ImageNews2} url='/berita/1' title='Kemendikbudristek Gelar Apresiasi Guru dan Tenaga Kependidikan 2023' description='Jakarta, Kemendikbudristek – Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (Kemendikbudristek), melalui' date='21 September 2023' time='16:27' />
                <MyCard img={ImageNews1} url='/berita/1' title='Kemendikbudristek Buka Pendaftaran Program Microcredential CS50X Indonesia-Harvard University Digital' description='Kemendikbudristek Buka Pendaftaran Program Microcredential CS50X Indonesia- Harvard University Digital Skill Tahun 2023' date='25 Agustus 2023' time='16:52' />
            </div>

            <Pagination />
        </App>
    )
}
