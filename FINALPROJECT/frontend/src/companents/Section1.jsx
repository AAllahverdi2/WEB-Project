// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Section1.scss"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Section1() {
  return (
    <div className='section1__all'>
      <div className='section1__all__top'><img src="https://static.insales-cdn.com/files/1/2951/33360775/original/1___1__a1acf778723981e12fecb6348d8a6838.png" alt="" /></div>
      <div className='section1__all__middle'>
        <div className='section1__all__middle__swipper'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
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
            <SwiperSlide><img src="https://static.insales-cdn.com/files/1/988/32785372/original/1___88feda7f97a251beb373954161625581.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://static.insales-cdn.com/files/1/7134/33053662/original/1_af20ed4149752d053780bd41b8dd7575.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://static.insales-cdn.com/files/1/6332/33028284/original/1_7a2ff7157d9f9d5f4493a2172a361d36.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://static.insales-cdn.com/files/1/330/33096010/original/1_028f7509604ef7c163954b520a2ccca7.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://static.insales-cdn.com/files/1/583/32842311/original/1__15_.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://static.insales-cdn.com/files/1/2406/33098086/original/2__1__946fb3c6d267177f1ec30282557ed75c.png" alt="" /></SwiperSlide>
            {/* <SwiperSlide>Slide 7</SwiperSlide> */}

          </Swiper>
        </div>
        <div className='section1__all__middle__imgs'>
          <img src="https://static.insales-cdn.com/files/1/5562/31626682/original/9_2e9b0d9608cca1fb4b49ad60891b5f33.png" alt="" />
          <img src="https://static.insales-cdn.com/files/1/5525/31626645/original/11_025f9695aa60b22b8ec576aa011f7f2a.png" alt="" />
          <img src="https://static.insales-cdn.com/files/1/5554/31626674/original/12_234e84017f80ad0e58d90fbca16fc4f0.png" alt="" />
        </div>
      </div>
      <div className='section1__all__bottom'>
            <div className="first__img">
<img src="https://static.insales-cdn.com/files/1/3970/27488130/original/lego_az_97d2e7da38a2e1fb68750b27870cc71a.png" alt="" />
            </div>
            <div className="second__img">
              <img src="https://static.insales-cdn.com/files/1/3966/27488126/original/bestseller.png" alt="" />
            </div>
      </div>

    </div>
  )
}

export default Section1
