import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Instagram from '../../../assets/icons/sosmed/Instagram'
import SosmedItems from '../../../components/SosmedItems'
import Tiktok from '../../../assets/icons/sosmed/Tiktok'
import Facebook from '../../../assets/icons/sosmed/Facebook'
import Youtube from '../../../assets/icons/sosmed/Youtube'
import Twitter from '../../../assets/icons/sosmed/Twitter'
import Threads from '../../../assets/icons/sosmed/Threads'
import Whatsapp from '../../../assets/icons/sosmed/Whatsapp'

export default function ContactMe() {
    return (
        <App title={'Kontak Kami PPID'}>
            <ContentHeader text={'PPID'} title={'Kontak Kami'} />

            <div className='space-y-10'>
                <div className='space-y-3'>
                    <h1 className='text-bold text-2xl text-blue-dark'>Saluran Informasi dan Pengaduan Terkait BGP SULTENG</h1>

                    <div className='text-slate-700 space-y-2'>
                        <div><strong>Telepon</strong>: (022) 4231191</div>
                        <div><strong>Fax</strong>: (022) 44207922</div>
                        <div><strong>Email</strong>: bbgpsulteng@kemdikbud.go.id</div>
                        <div><strong>Layanan Utama</strong>: </div>
                        <div><strong>Laman PPID</strong> </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <h1 className='text-bold text-2xl text-blue-dark'>Sosial Media Resmi</h1>

                    <div className='text-slate-700'>
                        <div className="grid grid-cols-2 w-2/5">
                            <div className='space-y-2'>
                                <SosmedItems icon={<Instagram />} title={'@bgp_sulteng'} />
                                <SosmedItems icon={<Tiktok />} title={'@bgp_sulteng'} />
                                <SosmedItems icon={<Facebook />} title={'@bgp_sulteng'} />
                                <SosmedItems icon={<Youtube />} title={'@bgp_sulteng'} />
                            </div>
                            <div className='space-y-2'>
                                <SosmedItems icon={<Twitter />} title={'@bgp_sulteng'} />
                                <SosmedItems icon={<Threads />} title={'@bgp_sulteng'} />
                                <SosmedItems icon={<Whatsapp />} title={'(+62) 123-4567-8910'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
