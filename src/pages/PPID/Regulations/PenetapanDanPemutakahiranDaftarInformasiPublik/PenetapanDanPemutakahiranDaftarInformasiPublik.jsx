import React from 'react'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'
import Image from '../../../../assets/images/regulasi/image4.png'

export default function PenetapanDanPemutakahiranDaftarInformasiPublik() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Penetapan dan Pemutakahiran Daftar Informasi Publik'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
