import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import OfficeImage from '../../../assets/images/office.png'

export default function Office() {
    return (
        <App title={'Kantor BGP Sulteng'}>
            <ContentHeader text={'Kantor BGP Sulteng'} />

            <div className='space-y-5'>
                <h1 className='text-center font-bold text-xl'>BGP Sulteng Kantor Kamonji</h1>

                <div className='flex items-center justify-center'>
                    <img src={OfficeImage} />
                </div>
            </div>

            <div className='text-center mt-5'>
                <h2 className='text-xl font-bold'>Balai Guru Penggerak Provinsi Sulawesi Tengah</h2>
                <p className='text-sm'>Jalan Tolambu No. 12, Kelurahan Kamonji, Kecamatan Palu Barat, Kota Palu, Sulawesi Tengah 94223</p>
            </div>
        </App>
    )
}
