import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Image from '../../../assets/images/program-sekolah-penggerak.jpg'

export default function DrivingSchoolProgram() {
    return (
        <App title={'Program Sekolah Penggerak'}>
            <ContentHeader text={'Program Sekolah Penggerak'} />

            <div className='space-y-36'>
                <div className="grid md:grid-cols-2 gap-28 items-center">
                    <div className='space-y-10'>
                        <h1 className='text-xl text-center md:text-start md:text-2xl font-serif text-blue-primary font-semibold uppercase'>Program Sekolah Penggerak</h1>
                        <p>Adalah program transformasi sekolah di Indonesia untuk mengakselerasi sekolah bergerak 1 – 2 tahap lebih maju dalam kurun waktu 3 (tiga tahun) melalui 5 (lima) bentuk intervensi yaitu pendampingan konsultatif dan asimetris, penguatan SDM sekolah, Pembelajaran dengan Paradigma Baru, Perencanaan Berbasis Data, dan Digitalisasi Sekolah. Melalui program ini diharapkan sekolah dapat mencapai hasil belajar siswa di atas level yang diharapkan, lingkungan belajar yang aman, nyaman, inklusif dan menyenangkan, proses pembelajaran yang berpusat pada peserta didik, serta budaya reflektif untuk perencanaan program dan anggaran serta perbaikan kualitas proses pembelajaran. Sekolah Penggerak akan menjadi agen transformasi dengan melakukan pengimbasan kepada sekolah lain</p>
                    </div>
                    <div>
                        <img src={Image} className='w-[445px] h-[130px]' />
                    </div>
                </div>
            </div>
        </App>
    )
}
