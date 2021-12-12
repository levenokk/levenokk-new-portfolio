import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TempImage from '../../../../../public/images/temp.png';

export const MainSectionSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      draggable
      autoplay={{
        delay: 5000,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          alt={''}
          src={TempImage}
          layout={'responsive'}
          objectFit={'cover'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt={''}
          src={TempImage}
          layout={'responsive'}
          objectFit={'cover'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt={''}
          src={TempImage}
          layout={'responsive'}
          objectFit={'cover'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt={''}
          src={TempImage}
          layout={'responsive'}
          objectFit={'cover'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt={''}
          src={TempImage}
          layout={'responsive'}
          objectFit={'cover'}
        />
      </SwiperSlide>
    </Swiper>
  );
};
