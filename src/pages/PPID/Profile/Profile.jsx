import React from 'react'
import ContentHeader from '../../../components/ContentHeader'
import ProfilePpidItems from '../../../components/ProfilePpidItems'
import App from '../../Layout/App'

export default function Profile() {
    return (
        <App title={'Profile PPID'}>
            <ContentHeader text={'PPID'} title={'Profile PPID'} />

            <div>
                <ProfilePpidItems url={'/ppid/profile-singkat'} title={'Profile Singkat PPID BGP Sulteng'} />
                <ProfilePpidItems url={'/ppid/profile-struktur-organisasi'} title={'Struktur Organisasi PPID'} />
                <ProfilePpidItems url={'/ppid/tugas-dan-fungsi'} title={'Tugas dan Fungsi PPID'} />
                <ProfilePpidItems url={'/ppid/visi-dan-misi'} title={'Visi dan Misi PPID'} />
                <ProfilePpidItems url={'/ppid/kontak-kami'} title={'Kontak Kami'} />
            </div>
        </App>
    )
}
