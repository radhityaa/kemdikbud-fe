import React from 'react'
import App from '../Layout/App'
import ContentHeader from '../../components/ContentHeader'

export default function HistoryBgp() {
    return (
        <App title={'Sejarah Lembaga BGP Sulteng'}>
            <ContentHeader text={'Sejarah Lembaga BGP Sulteng'} />

            <div className='space-y-4 mb-5'>
                <p>Balai Besar Guru Penggerak (BGP) Sulawesi Tenggara adalah Unit Pelaksana Teknis (UPT) Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (Kemendikbudristek) di bawah Direktur Jenderal Guru dan Tenaga Kependidikan (GTK) yang memiliki tugas melaksanakan pengembangan dan pemberdayaan Guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah.</p>
                <p>BGP Sulawesi Tenggara memiliki sejarah yang panjang, dimulai dari berdirinya Balai Penataran Kesejahteraan Keluarga (BPKK) Sulawesi Tenggara pada tahun 1979. BPKK Sulawesi Tenggara merupakan lembaga yang bertugas untuk melaksanakan pelatihan dan pengembangan tenaga kependidikan non-guru, seperti guru BK, guru pramuka, guru olahraga, dan sebagainya.</p>
                <p>Pada tahun 1990, BPKK Sulawesi Tenggara berubah nama menjadi Balai Pengembangan Pendidikan Luar Sekolah dan Pemuda (BPPLSP) Sulawesi Tenggara. BPPLSP Sulawesi Tenggara memiliki tugas yang lebih luas, yaitu melaksanakan pelatihan dan pengembangan tenaga kependidikan non-guru, serta kegiatan pendidikan luar sekolah dan pemuda.</p>
                <p>Pada tahun 2022, BPPLSP Sulawesi Tenggara berubah nama menjadi BGP Sulawesi Tenggara. Perubahan nama ini sejalan dengan perubahan kebijakan Kemendikbudristek yang memfokuskan BGP pada pengembangan dan pemberdayaan guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah.</p>

            </div>

            <div className='space-y-5 my-5'>
                <h1 className='font-bold text-xl'>Berikut ini adalah susunan kepengurusan BGP Sulawesi Tenggara dari masa ke masa:</h1>
                <p>Kepala BPKK/BPPLSP/BGP Sulawesi Tenggara</p>
                <ul className='list-disc ml-4'>
                    <li>Drs. H. Abd. Razak (1979-1983)</li>
                    <li>Drs. H. Djaelani (1983-1986)</li>
                    <li>Drs. H. Andi Abdullah (1986-1990)</li>
                    <li>Drs. H. Muhammad Ali (1990-1993)</li>
                    <li>Drs. H. A. Rahim (1993-1996)</li>
                    <li>Drs. H. La Ode M. Basri (1996-2000)</li>
                    <li>Drs. H. La Ode M. Basri (2000-2004)</li>
                    <li>Drs. H. La Ode M. Basri (2004-2008)</li>
                    <li>Drs. H. La Ode M. Basri (2008-2012)</li>
                    <li>Drs. H. La Ode M. Basri (2012-2016)</li>
                    <li>Drs. H. La Ode M. Basri (2016-2020)</li>
                    <li>Drs. H. La Ode M. Basri (2020-2022)</li>
                    <li>Drs. H. La Ode M. Basri (2022-sekarang)</li>
                </ul>
            </div>
            <div className="space-y-5 my-5">
                <h1 className='font-bold text-xl'>Visi dan Misi BGP Sulawesi Tenggara</h1>
                <div className='space-y-3'>
                    <h1 className='font-bold text-xl'>Visi:</h1>
                    <p>Menjadi pusat pengembangan dan pemberdayaan guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah yang unggul dan bermartabat.</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='font-bold text-xl'>Misi:</h1>
                    <ul className="list-disc ml-4 space-y-2">
                        <li>Penyelenggaraan program dan kegiatan pengembangan dan pemberdayaan guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah.</li>
                        <li>Pengembangan dan pelaksanaan sistem informasi pengembangan dan pemberdayaan guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah.</li>
                        <li>Pelaksanaan evaluasi dan pelaporan pelaksanaan pengembangan dan pemberdayaan guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah.</li>
                    </ul>
                </div>
                <div className='space-y-5'>
                    <h1 className='font-bold text-xl'>Tujuan BGP Sulawesi Tenggara</h1>
                    <h1 className='font-bold text-lg'>BBGP Sulawesi Tenggara bertujuan untuk:</h1>
                    <ul className='list-disc ml-4 space-y-2'>
                        <li>Meningkatkan kompetensi dan profesionalitas guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah, dan Pengawas Sekolah.</li>
                        <li>Mendorong dan memfasilitasi inovasi dan kreativitas guru, pendidik lainnya, tenaga kependidikan, calon Kepala Sekolah, Kepala Sekolah, Calon Pengawas Sekolah</li>
                    </ul>
                </div>
            </div>
        </App>
    )
}
