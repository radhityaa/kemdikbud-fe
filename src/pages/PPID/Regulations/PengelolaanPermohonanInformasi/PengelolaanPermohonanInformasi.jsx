import React from 'react'
import Image from '../../../../assets/images/regulasi/image6.png'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'

export default function PengelolaanPermohonanInformasi() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Pengelolaan Permohonan Informasi'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
