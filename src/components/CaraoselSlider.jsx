import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CaraoselSlider({ children }) {
    return (
        <Carousel
            dynamicHeight={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                    <div
                        className={`${hasPrev ? "absolute" : "hidden"
                            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <div className="text-black text-4xl">❮</div>
                    </div>
                );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
                return (
                    <div
                        className={`${hasNext ? "absolute" : "hidden"
                            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                        onClick={clickHandler}
                    >
                        <div className="text-black text-4xl">❯</div>
                    </div>
                );
            }}
        >
            {children}
        </Carousel>
    )
}
