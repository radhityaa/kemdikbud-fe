import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import MenuItems from '../../../components/MenuItems'

export default function Regulations() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID'} title={'Regulasi'} />

            <div>
                <MenuItems url={'/ppid/regulasi/penanganan-sengketa-informasi-publik'} title={'Penanganan Sengketa informasi Publik'} w={'md:w-2/4'} />
                <MenuItems url={'/ppid/regulasi/pendokumentasian-informasi-publik'} title={'Pendokumentasian informasi publik'} w={'md:w-2/4'} />
                <MenuItems url={'/ppid/regulasi/pendokumentasian-informasi-yang-di-kecualikan'} title={'Pendokumentasian Informasi yang di Kecualikan'} w={'md:w-2/4'} />
                <MenuItems url={'/ppid/regulasi/penetapan-dan-pemutakahiran-daftar-informasi-publik'} title={'Penetapan dan Pemutakahiran Daftar Informasi Publik'} w={'md:w-2/4'} />
                <MenuItems url={'/ppid/regulasi/pengelolaan-keberatan-atas-informasi'} title={'Pengelolaan Keberatan Atas Informasi'} w={'md:w-2/4'} />
                <MenuItems url={'/ppid/regulasi/pengelolaan-permohonan-informasi'} title={'Pengelolaan Permohonan Informasi'} w={'md:w-2/4'} />
                <MenuItems url={'/ppid/regulasi/pengujian-konsekuensi'} title={'Pengujian Konsekuensi'} w={'md:w-2/4'} />
            </div>
        </App>
    )
}
