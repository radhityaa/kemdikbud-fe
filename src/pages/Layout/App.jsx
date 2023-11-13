import React, { useEffect, useRef } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Hero from '../../components/Hero'
import Footer from './Footer'

export default function App({ title, children }) {
    document.title = title ? `${title} - Kemedikbud` : 'Kemendikbud'

    return (
        <>
            <Header />
            <Navbar />
            <Hero />
            <div className='px-3 md:container pb-24'>
                {children}
            </div>
            <Footer />
        </>
    )
}
