import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Image from '../../../assets/images/internship-programme.jpg'

export default function InternshipProgramme() {
    return (
        <App title={'Internship Programme for Student with Disability (Blindness and Visual Impairment)'}>
            <ContentHeader text={'Internship Programme for Student with Disability (Blindness and Visual Impairment)'} />

            <div>
                <p>Program magang untuk peserta didik dari jenjang SMK khusus SLB A ini sebagai upaya BBGP Jawa Barat dalam mengakomodir kebutuhan
                    peserta didik dengan kondisi disabilitas untuk menuntaskan kewajiban magangnya di instansi/lembaa/perusahaan serta memfasilitasi peserta didik untuk mengenal lingkungan kerja tanpa terkecuali peserta didik dengan disabilitas. Siswa/i akan ditempatkan di tim kerja yang paling sesuai dengan kompetensi/bidang kejuruannya, atau keterampilan yang dimiliki.</p>

                <div className='flex justify-center pt-10'>
                    <img src={Image} className='w-[427px] h-[320px] cursor-pointer' />
                </div>
            </div>
        </App>
    )
}
