'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import React, { FC, PropsWithChildren } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from '@/src/components/Common/Cards/ProductCard';
import styles from './InternalSwiper.module.scss';

interface InternalSwiperProps {}

const InternalSwiper: FC<PropsWithChildren<InternalSwiperProps>> = ({}) => (
  // const arrChildren = useMemo(
  //   () => React.Children.toArray(children),
  //   [children],
  // );

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
      <ProductCard
        img="https://nextui.org/images/hero-card-complete.jpeg"
        title="Dziewka"
        price="€39.99"
      />
    </SwiperSlide>
    <SwiperSlide>
      <ProductCard
        img="https://nextui.org/images/hero-card-complete.jpeg"
        title="Dziewka"
        price="€39.99"
      />
    </SwiperSlide>
    <SwiperSlide>
      <ProductCard
        img="https://nextui.org/images/hero-card-complete.jpeg"
        title="Dziewka"
        price="€39.99"
      />
    </SwiperSlide>
    <SwiperSlide>
      <ProductCard
        img="https://nextui.org/images/hero-card-complete.jpeg"
        title="Dziewka"
        price="€39.99"
      />
    </SwiperSlide>
    <SwiperSlide>
      <ProductCard
        img="https://nextui.org/images/hero-card-complete.jpeg"
        title="Dziewka"
        price="€39.99"
      />
    </SwiperSlide>
    {/* {arrChildren.map((child, index) => ( */}
    {/*  <SwiperSlide key={index}>{child}</SwiperSlide> */}
    {/* ))} */}
  </Swiper>
);
export default InternalSwiper;
