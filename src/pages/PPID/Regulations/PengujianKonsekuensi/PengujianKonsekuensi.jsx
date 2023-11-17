import React from 'react'
import Image from '../../../../assets/images/regulasi/image7.png'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'

export default function PengujianKonsekuensi() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Pengujian Konsekuensi'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
