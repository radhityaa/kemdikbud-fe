import React from 'react'
import Article from '../../components/Article'
import App from '../Layout/App'
import News from '../../components/News'
import StrategicProgram from '../../components/StrategicProgram'
import DrivingOrganization from '../../components/DrivingOrganization'
import Features from '../../components/Features'

export default function Home() {
    return (
        <App title={'Homepage'}>
            <section id="features" className='py-3'>
                <Features />
            </section>

            <section id='program-strategis' className='py-3'>
                <StrategicProgram />
            </section>

            <section id='berita' className='py-3'>
                <News />
            </section>

            <section id='artikel' className='py-3'>
                <Article />
            </section>

            <section id='driving-organization' className='py-3'>
                <DrivingOrganization />
            </section>
        </App>
    )
}
