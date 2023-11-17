import React from 'react'
import ContentHeader from '../../../components/ContentHeader'
import MenuItems from '../../../components/MenuItems'
import App from '../../Layout/App'

export default function Profile() {
    return (
        <App title={'Profile PPID'}>
            <ContentHeader text={'PPID'} title={'Profile PPID'} />

            <div>
                <MenuItems url={'/ppid/profile-singkat'} title={'Profile Singkat PPID BGP Sulteng'} />
                <MenuItems url={'/ppid/profile-struktur-organisasi'} title={'Struktur Organisasi PPID'} />
                <MenuItems url={'/ppid/tugas-dan-fungsi'} title={'Tugas dan Fungsi PPID'} />
                <MenuItems url={'/ppid/visi-dan-misi'} title={'Visi dan Misi PPID'} />
                <MenuItems url={'/ppid/kontak-kami'} title={'Kontak Kami'} />
            </div>
        </App>
    )
}
