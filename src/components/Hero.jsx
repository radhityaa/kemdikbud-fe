import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../assets/images/hero/1.webp';
import Image2 from '../assets/images/hero/2.png';
import Image3 from '../assets/images/hero/3.png';
import Image4 from '../assets/images/hero/4.png';
import Image5 from '../assets/images/hero/5.png';
import Image6 from '../assets/images/hero/6.png';
import CaraoselSlider from './CaraoselSlider';

export default function Hero() {
    const sliders = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
    ]

    return (
        <CaraoselSlider>
            {sliders.map((item, index) => (
                <img src={item} key={index} />
            ))}
        </CaraoselSlider>
    )
}
