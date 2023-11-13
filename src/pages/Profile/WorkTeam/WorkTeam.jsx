import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Timkerja from '../../../assets/images/timkerja.png'

export default function WorkTeam() {
    return (
        <App title={'Tim Kerja'}>
            <ContentHeader text={'Tim Kerja'} />

            <div className='space-y-10'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className='flex items-center justify-center'>
                    <img src={Timkerja} />
                </div>
            </div>
        </App>
    )
}
