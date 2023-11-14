import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'

export default function KPPD() {
    return (
        <App title={'KPPD'}>
            <ContentHeader text={'KPPD'} />

            <div className='mb-10'>
                <div className='space-y-1 mb-4'>
                    <h1 className='font-bold text-center md:text-start md:text-lg uppercase'>Rincian Tugas</h1>
                    <h1 className='font-bold text-center md:text-start md:text-lg uppercase'>Tim kerja kemitraan dan pemberdayaan komunitas</h1>
                </div>
                <p>Berdasarkan Permendikbudristek No. 14 Tahun 2022 tentang OTK BBGP/BGP serta Kepmendikbudristek No. 301/0/2022 tentang Rincian
                    Tugas B/BGP, Tim Kerja Kemitraan dan Pemberdayaan Komunitas mempunyai tugas
                    melaksanakan penyusunan bahan kemitraan di bidang pengembangan dan pemberdayaan GTKPL, calon kepala sekolah, kepala sekolah, calon pengawas, dan pengawas sekolah;
                    melaksanakan kemitraan di bidang pengembangan dan pemberdayaan GTKPL, calon kepala sekolah, kepala sekolah, calon pengawas, dan pengawas sekolah; serta melaksanakan pengembangan kemitraan di bidang pengembangan dan pemberdayaan GTKPL, calon kepala sekolah, kepala sekolah, calon pengawas, dan pengawas sekolah.</p>
            </div>

            <div className='mb-10'>
                <div className='space-y-1 mb-4'>
                    <h1 className='font-bold text-center md:text-start md:text-lg uppercase'>Rincian Tugas</h1>
                    <h1 className='font-bold text-center md:text-start md:text-lg uppercase'>Tim kerja kemitraan dan pemberdayaan komunitas</h1>
                </div>
                <p>Mengembangkan komunitas belajar dan membangun hubungan kemitraan dengan berbagai pemangku kepentingan (stakeholders)
                    untuk mendukung implementasi program-program Balai Besar Guru Penggerak termasuk mengembangkan publikasi dan komunikasi.</p>
            </div>
        </App>
    )
}
