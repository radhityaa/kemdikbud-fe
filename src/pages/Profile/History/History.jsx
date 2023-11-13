import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Sejarah from '../../../assets/images/sejarah.png'

export default function History() {
    return (
        <App title={'Sejarah'}>
            <ContentHeader text={'Sejarah'} />

            <div className='space-y-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatt.</p>

                <img src={Sejarah} />
            </div>
        </App>
    )
}
