'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import React, { FC, PropsWithChildren, useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCard from '@/src/components/Common/SwiperCard';
import styles from './InternalSwiper.module.scss';

interface InternalSwiperProps {}

const InternalSwiper: FC<PropsWithChildren<InternalSwiperProps>> = ({
  children,
}) => {
  const arrChildren = useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  return (
    <Swiper
      effect="coverflow"
      initialSlide={1}
      centeredSlides
      navigation
      loop
      spaceBetween={30}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: -15,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
      }}
      modules={[Navigation, EffectCoverflow, Pagination, Autoplay]}
      className={styles.extendedSwiper}
    >
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard />
      </SwiperSlide>
      {/* {arrChildren.map((child, index) => ( */}
      {/*  <SwiperSlide key={index}>{child}</SwiperSlide> */}
      {/* ))} */}
    </Swiper>
  );
};

export default InternalSwiper;
