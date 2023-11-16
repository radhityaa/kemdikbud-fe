import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'

export default function VisiMission() {
    return (
        <App title={'PPID'}>
            <ContentHeader text={'PPID'} title={'Visi dan Misi'} />

            <div className='grid md:grid-cols-2 gap-16'>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold text-blue-dark'>Visi</h1>
                    <p className='text-slate-700 text-lg leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-3xl font-bold text-blue-dark'>Misi</h1>
                    <article className='prose-ul:text-blue-primary prose-ul:ml-5'>
                        <ul className='list-disc text-slate-700 text-lg space-y-2'>
                            <li><span className='text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor</span></li>
                            <li><span className='text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor</span></li>
                            <li><span className='text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor</span></li>
                        </ul>
                    </article>
                </div>
            </div>
        </App>
    )
}
