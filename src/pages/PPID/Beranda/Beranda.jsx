import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Image1 from '../../../assets/images/ppid/image1.png'

export default function Beranda() {
    return (
        <App title={'PPID - Beranda'}>
            <ContentHeader text={'PPID'} title={'Beranda'} />

            <div className='space-y-5 text-slate-700'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, error laborum quia asperiores voluptas tenetur, eaque dolorum impedit laudantium non, mollitia odit nam ipsam. Quasi quos obcaecati aperiam distinctio nobis facilis iste saepe cumque, odio eaque exercitationem? Animi iure sit architecto placeat tempora id deserunt voluptate sunt fugit corrupti!</p>

                <img src={Image1} className='w-[735px] h-[520px] mx-auto' />
            </div>
        </App>
    )
}
