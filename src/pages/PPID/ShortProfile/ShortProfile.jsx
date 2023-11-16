import React from 'react'
import Image from '../../../assets/images/ppid/image2.png'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'

export default function ShortProfile() {
    return (
        <App title={'Profil Singkat PPID BGP Sulteng'}>
            <ContentHeader text={'PPID'} title={'Profil Singkat PPID BGP Sulteng'} />

            <div>
                <div className="md:flex gap-8">
                    <div className='md:w-2/5 mb-10 md:mb-0'>
                        <img src={Image} className='w-full h-full' />
                    </div>

                    <div className='w-full space-y-5 text-slate-700'>
                        <p>Reformasi yang bergulir pada tahun 1998 yang ditandai dengan 3 (tiga) tuntutan yaitu; demokratisasi, transparansi, dan supremasi hukum & HAM, telah membawa perubahan mendasar dalam kehidupan bermasyarakat, berbangsa dan benegara. Konsekuensi dari tuntutan reformasi tersebut salah satu diantaranya adalah ditetapkannya Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik yang bertujuan untuk mewujudkan tata kelola pemerintahan yang baik dan bertanggungjawab (good governance) melalui penerapan prinsip-prinsip akuntabilitas, transparansi, dan supremasi hukum serta melibatkan partisipasi masyarakat dalam setiap proses kebijakan publik.</p>

                        <p>Terkait Pelayanan Informasi Publik sebagaimana diamanatkan dalam Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, telah ditetapkan Pejabat Pengelola Informasi dan Dokumentasi (PPID) di lingkungan Balai Besar Guru Penggerak Provinsi Sulawesi Tengah Kementerian Pendidikan dan Kebudayaan melalui Keputusan Kepala Balai Besar Guru Penggerak Provinsi Sulawesi Tengah Nomor : 0777/B7.2/HM.01.00/2022Tentang Pejabat Pengelola Informasi dan Dokumentasi di Lingkungan Balai Besar Guru Penggerak Sulawesi Tengah.</p>

                        <p>Dalam pelaksanaan tugas memberikan layanan informasi publik, PPID di lingkungan Balai Besar Guru Penggerak Provinsi Sulawesi Tengah berpedoman pada Peraturan Menteri Pendidikan dan Kebudayaan Nomor 41 Tahun 2020 Tentang Layanan Informasi Publik di Lingkungan Kementerian Pendidikan dan Kebudayaan. Berdasarkan hal-hal tersebut di atas, PPID di lingkungan Balai Besar Guru Penggerak Provinsi Sulawesi Tengah bertanggung jawab untuk melakukan penyediaan, penyimpanan, pendokumentasian, pelayanan, dan pengamanan informasi publik. Salam Keterbukaan Informasi.</p>

                        <p>Kepala BBGP Provinsi Sulawesi Tengah.</p>

                        <p>TTD.<br />Mohamad Hartono</p>
                    </div>
                </div>
            </div>
        </App>
    )
}
