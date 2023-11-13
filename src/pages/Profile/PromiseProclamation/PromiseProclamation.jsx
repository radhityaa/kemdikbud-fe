import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import JanjiMaklumat from '../../../assets/images/janjimaklumat.png'

export default function PromiseProclamation() {
    return (
        <App title={'Janji Maklumat Layanan'}>
            <ContentHeader text={'Maklumat Layanan'} />

            <div className='space-y-10'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className='flex items-center justify-center'>
                    <img src={JanjiMaklumat} />
                </div>
            </div>
        </App>
    )
}
