import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'

export default function JobFunction() {
    return (
        <App title={'Tugas dan Fungsi'}>
            <ContentHeader text={'PPID'} title={'Tugas dan Fungsi'} />

            <div>
                <h1 className='text-slate-700 font-semibold text-lg'>Tugas dan Fungsi PPID sesuai dengan Permendikbud 41 Tahun 2020 adalah sebagai berikut:</h1>

                <ul className='list-decimal mt-5 ml-4 text-slate-700 space-y-2'>
                    <li>Penyediaan, penyimpanan, pendokumentasian, dan pengamanan Informasi;</li>
                    <li>Pelayanan Informasi sesuai dengan aturan yang berlaku;</li>
                    <li>Pelayanan Informasi Publik yang cepat, tepat, dan sederhana;</li>
                    <li>Penetapan prosedur operasional penyebarluasan Informasi Publik;</li>
                    <li>Pengujian Konsekuensi;</li>
                    <li>Pengklasifikasian Informasi dan/atau pengubahannya;</li>
                    <li>Penetapan Informasi Publik yang Dikecualikan yang telah habis jangka waktu pengecualiannya sebagai Informasi Publik yang dapat diakses;</li>
                    <li>Penetapan pertimbangan tertulis atas setiap kebijakan yang diambil untuk memenuhi hak setiap orang atas Informasi Publik;</li>
                    <li>Menyelesaikan sengketa Informasi Publik unit organisasi atau unit kerja yang bersangkutan; dan</li>
                    <li>Melakukan evaluasi terhadap PPID di unit organisasi atau unit kerja yang bersangkutan.</li>
                </ul>
            </div>
        </App>
    )
}
