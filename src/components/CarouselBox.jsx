import React from 'react'

import forestImg from '../assets/forest.jpg'
import dforestImg from '../assets/dark-forest.jpg'

import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './CarouselBox.css'

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function CarouselBox() {
    return (
        <div>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src={forestImg} alt='Forest' width='100%' height='100%' />
                        <div className='text-overlay'>
                            <h2>Forest</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-content'>
                        <img src={dforestImg} alt='Dark Forest' width='100%' height='100%' />
                        <div className='text-overlay'>
                            <h2>Dark forest</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, inventore!</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
