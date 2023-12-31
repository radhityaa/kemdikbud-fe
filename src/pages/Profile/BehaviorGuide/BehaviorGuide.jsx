import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import PanduanPerilaku from '../../../assets/images/panduanperilaku.png'
import PanduanPerilaku2 from '../../../assets/images/panduanperilaku2.png'

export default function BehaviorGuide() {
    return (
        <App title={'Panduan Perilaku Core Value'}>
            <ContentHeader text={'Panduan Perilaku Core Value'} />

            <div className='space-y-10'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className='flex items-center justify-center'>
                    <img src={PanduanPerilaku} />
                </div>

                <p>Buku Panduan dapat diunduh <span className='text-blue-primary hover:underline cursor-pointer font-bold'>disini</span></p>

                <div className='flex items-center justify-center'>
                    <img src={PanduanPerilaku2} />
                </div>
            </div>
        </App>
    )
}
