import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Image from '../../../assets/images/ppid/image3.png'

export default function OrganizationalStructure() {
    return (
        <App title={'Struktur Organisasi PPID'}>
            <ContentHeader text={'PPID'} title={'Struktur Organisasi PPID'} />

            <div className='space-y-5 text-slate-700'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla adipisci, error laborum quia asperiores voluptas tenetur, eaque dolorum impedit laudantium non, mollitia odit nam ipsam. Quasi quos obcaecati aperiam distinctio nobis facilis iste saepe cumque, odio eaque exercitationem? Animi iure sit architecto placeat tempora id deserunt voluptate sunt fugit corrupti!</p>

                <img src={Image} className='w-[735px] h-[520px] mx-auto' />
            </div>
        </App>
    )
}
