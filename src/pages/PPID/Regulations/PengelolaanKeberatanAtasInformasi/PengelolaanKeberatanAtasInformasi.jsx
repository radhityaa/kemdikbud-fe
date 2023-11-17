import React from 'react'
import Image from '../../../../assets/images/regulasi/image5.png'
import App from '../../../Layout/App'
import ContentHeader from '../../../../components/ContentHeader'

export default function PengelolaanKeberatanAtasInformasi() {
    return (
        <App title={'PPID Regulasi'}>
            <ContentHeader text={'PPID Regulasi'} title={'Pengelolaan Keberatan Atas Informasi'} />

            <div>
                <img src={Image} />
            </div>
        </App>
    )
}
