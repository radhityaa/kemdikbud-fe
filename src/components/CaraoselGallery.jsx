import React from 'react'
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import Image1 from '../assets/images/galery/1.png'
import Image2 from '../assets/images/galery/2.png'
import Image3 from '../assets/images/galery/3.jpg'
import Image4 from '../assets/images/galery/4.png'
import Image5 from '../assets/images/galery/5.png'
import Image6 from '../assets/images/galery/6.png'

export default function CaraoselGallery() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Image1} className='w-full h-96 object-cover object-center brightness-50' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} className='w-full h-96 object-cover object-center brightness-50' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image3} className='w-full h-96 object-cover object-center brightness-50' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image4} className='w-full h-96 object-cover object-center brightness-50' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image5} className='w-full h-96 object-cover object-center brightness-50' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image6} className='w-full h-96 object-cover object-center brightness-50' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
