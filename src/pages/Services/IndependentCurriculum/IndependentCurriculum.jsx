import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Image from '../../../assets/images/kurikulum-merdeka.jpg'

export default function IndependentCurriculum() {
    return (
        <App title={'Implementasi Kurikulum Merdeka'}>
            <ContentHeader text={'Implementasi Kurikulum Merdeka'} />

            <div className='space-y-36'>
                <div className="grid md:grid-cols-2 gap-28 items-center">
                    <div className='space-y-10'>
                        <h1 className='text-xl text-center md:text-start md:text-2xl font-serif text-blue-primary font-semibold uppercase'>Implementasi Kurikulum Merdeka</h1>
                        <p>Kurikulum Merdeka dikembangkan sebagai kerangka kurikulum yang lebih fleksibel, berfokus pada materi esensial, pengembangankarakter, dan kompetensi peserta didik. Karakteristik utama kurikulum yang mendukung pemulihan pembelajaran ini adalah:pembelajaran berbasis projek untuk pengembangan soft skills dan karakter profil pelajar Pancasila, fokus pada materi esensial sehinggaada cukup waktu untuk pembelajaran yang mendalam bagi kompetensi dasar seperti literasi dan numerasi, serta fleksibelitas bagi guruuntuk melakukan pembelajaran yang berdiferensiasi sesuai dengan kemampuan peserta didik dan melakukan penyesuaian dengankonteks dan muatan lokal.</p>
                    </div>
                    <div>
                        <img src={Image} className='w-[503px] h-[377px]' />
                    </div>
                </div>
            </div>
        </App>
    )
}
