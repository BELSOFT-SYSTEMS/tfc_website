import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';




export const Swipper = ({ items }) => {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}

            
                className="swiper_container"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>

                        <img src={item} alt="" />

                    </SwiperSlide>
                ))
                }

              
            </Swiper>
        </div>
    );
}

