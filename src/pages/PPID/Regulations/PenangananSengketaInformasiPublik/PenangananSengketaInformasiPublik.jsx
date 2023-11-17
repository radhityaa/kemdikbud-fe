import React from 'react'
import Image from '../../../../assets/images/regulasi/image1.png'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'

export default function PenangananSengketaInformasiPublik() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Penanganan Sengketa Informasi Publik'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
