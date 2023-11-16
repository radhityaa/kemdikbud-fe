import React from 'react'
import ContentHeader from '../../../components/ContentHeader'
import ProfilePpidItems from '../../../components/ProfilePpidItems'
import App from '../../Layout/App'

export default function Profile() {
    return (
        <App title={'PPID'}>
            <ContentHeader text={'PPID'} title={'Profile PPID'} />

            <div>
                <ProfilePpidItems url={'/ppid/profile-singkat'} title={'Profile Singkat PPID BGP Sulteng'} />
                <ProfilePpidItems url={'/ppid/profile-struktur-organisasi'} title={'Struktur Organisasi PPID'} />
                <ProfilePpidItems url={'#'} title={'Tugas dan Fungsi PPID'} />
                <ProfilePpidItems url={'#'} title={'Visi dan Misi PPID'} />
                <ProfilePpidItems url={'#'} title={'Kontak Kami'} />
            </div>
        </App>
    )
}
