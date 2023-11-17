import React from 'react'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'
import Image from '../../../../assets/images/regulasi/image2.png'

export default function PendokumentasianInformasiPublik() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Pendokumentasian Informasi Publik'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
