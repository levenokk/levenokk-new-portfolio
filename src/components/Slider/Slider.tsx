import 'swiper/css';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import TempImage from '../../../public/images/temp.png';

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
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
    </Swiper>
  );
};
