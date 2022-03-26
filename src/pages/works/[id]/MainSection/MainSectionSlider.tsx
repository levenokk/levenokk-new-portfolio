import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TempImage from '../../../../../public/images/temp.png';
import { API_URL } from '../../../../constants';
import { UploadFileEntity } from '../../../../graphql/generated/graphql';

type Props = {
  images?: UploadFileEntity[];
};

export const MainSectionSlider = ({ images }: Props) => {
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
      {images?.map((image) => (
        <SwiperSlide key={image.id}>
          <Image
            width={image?.attributes?.width || 0}
            height={image?.attributes?.height || 0}
            alt={image?.attributes?.name}
            src={API_URL + image?.attributes?.url || TempImage}
            layout={'responsive'}
            objectFit={'cover'}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
