import React from 'react'
import Calendar from '../../../assets/icons/Calendar'
import Image1 from '../../../assets/images/news/news4.jpg'
import Image2 from '../../../assets/images/news/detail.jpg'
import ContentHeader from '../../../components/ContentHeader'
import OtherNews from '../../../components/OtherNews'
import { OtherNewsDatas } from '../../../dummy/OtherNews'
import App from '../../Layout/App'
import Folder from '../../../assets/icons/Folder'
import IconFacebook from '../../../assets/icons/IconFacebook'
import IconTwitter from '../../../assets/icons/IconTwitter'
import IconLinkedin from '../../../assets/icons/IconLinkedin'
import IconWhatsapp from '../../../assets/icons/IconWhatsapp'
import ShareButton from '../../../components/ShareButton'

export default function DetailBerita() {
    return (
        <App title={'Detail Berita'}>
            <ContentHeader text={'Berita'} />

            <div>
                <div className="flex flex-wrap justify-between gap-10">
                    <div className='md:w-[60%] flex-col'>
                        <img src={Image1} className='w-full' />
                        <div className='flex items-center gap-2 py-5 ml-5'>
                            <Calendar />
                            <span className='text-sm text-slate-600 font-semibold'>11 November 2023 pkl. 16:58</span>
                        </div>

                        <div className='py-5'>
                            <h1 className='md:text-2xl text-blue-dark font-semibold'>Evaluasi Pelaksanaan Bimtek Peningkatan Kompetensi Guru Informatika SMP Secara Daring Tahun 2023</h1>

                            <div className='text-slate-600 space-y-5 py-5 leading-8'>
                                <p>Hello... Sahabat Guru Dikdas</p>

                                <p>Direktorat Guru Pendidikan Dasar Direktorat Jenderal Guru dan Tenaga Kependidikan, pada hari Kamis  sampai dengan hari Minggu/ tanggal 9 sampai dengan tanggal 12 November 2023 melaksanakan Evaluasi pelaksanaan Bimtek peningkatan kompetensi guru Informatika Untuk Guru SMP. Kegiatan ini  berkenaan dengan telah terbitnya Keputusan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi (Kepmendikbudristek) Nomor 262/M/2022 tentang Perubahan atas Kepmendikbudristek Nomor 56/M/2022 tentang Pedoman Penerapan Kurikulum Dalam Rangka Capaian Pembelajaran pada Kurikulum Merdeka khususnya pada mata Pelajaran Informatika SMP Direktorat Jenderal Guru dan Tenaga Kependidikan, Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi melalui Direktorat Guru Pendidikan Dasar, melaksanakan Bimbingan Teknis (Bimtek) Peningkatan Kompetensi Guru Informatika SMP secara daring melalui Learning Manajemen Sistem Platform Merdeka Mengajar dengan tautan di https://guru.kemdikbud.go.id/</p>

                                <p>Pelaksanaan Bimtek Informatika untuk guru SMP, ini merupakan pelaksanaan yang ke dua. Pelaksanaan pertama di laksankan pada tahun 2022 dengan jumlah peserta 880 guru Informatika dan pelaksanaan ke dua dilaksankan tahun 2023 ini yang di ikuti oleh 1100 guru SMP. Kegiatan Bimtek ini bertujuan untuk memberikan bimbingan teknis berupa pengetahuan dan keterampilan  untuk meningkatkan kompetensi pelajaran informatika kepada guru SMP Pelaksanaan Bimtek dilakukan dengan menggunakan pendekatan Marzano dimana peserta mempelajari materi terlebih dahulu sebelumnya dan berdiskusi dengan para narasumber pada saat sesi syncronus/tatap muka.  Adapun materi bimtek yang di dapatkan oleh peserta terdiri dari 4 modul yaitu; Modul 1 : Keilmuan Informatika: Analisis Data, Modul III : Penguatan Kompetensi Elemen Informatika: Algoritma Pemrograman, Modul IV : Penerapan Pembelajaran HOTS dan TPACK</p>

                                <p>Pelaksanaan Bimtek tersebut perlu dilakukan Evaluasi untuk mengetahui data dan Informasi pelaksanaan Bimtek, adapun hasil Evaluasi Pelasksanaan Bimtek peningkatan kompetensi guru Informatika. Berdasarkan persebaran peserta Bimtek tahun 2022 dan tahun 2023 bahwa Tahun 2023 berdasarkan komentar  guru alumni tahun 2022. Apresiasi yang dinilai baik pada: Alur pembelajaran, layanan Narasumber, konten modul, dan capaian pembelajaran, selanjutnya penilaian peserta tersebut dikuatkan dengan  hasil survey bahwa <strong>partisipasi peserta yang lebih tinggi dalam mengikuti pelatihan. Hal ini bisa dilihat pada hasil survey berikut:</strong></p>

                                <img src={Image2} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <OtherNews data={OtherNewsDatas} />
                    </div>

                    <div className='py-5'>
                        <div className="flex items-center gap-5 text-lg font-semibold">
                            <div>Kategori :</div>
                            <div className='flex items-center gap-1 text-red-600 bg-gray-100 px-3 py-1 rounded-md'>
                                <Folder />
                                Berita
                            </div>
                        </div>
                        <ShareButton />
                    </div>
                </div>
            </div>
        </App>
    )
}
