import React from 'react'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'
import Image from '../../../../assets/images/regulasi/image3.png'

export default function PendokumentasianInformasiYangDiKecualikan() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Pendokumentasian Informasi Yang DiKecualikan'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
