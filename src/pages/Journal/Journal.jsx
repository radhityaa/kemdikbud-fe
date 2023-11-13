import React from 'react'
import App from '../Layout/App'
import ContentHeader from '../../components/ContentHeader'

export default function Journal() {
    return (
        <App title={'Jurnal'}>
            <ContentHeader text={'Jurnal'} />

            <div>
                <h5>Beberapa jurnal baru telah terupload di laman ini. <span className='text-blue-primary font-semibold hover:underline cursor-pointer'>Klik Disini</span> untuk melihat lebih lengkap dan mengunduhnya.</h5>
            </div>
        </App>

    )
}
