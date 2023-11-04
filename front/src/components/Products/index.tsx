'use client';

import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import InternalCard from '@/src/components/Products/InternalCard';
import GlassLayout from '@/src/components/Layouts/GlassLayout';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import styles from './Products.module.scss';

interface ProductsProps {}

const Products: FC<PropsWithChildren<ProductsProps>> = () => (
  <>
    <GlassLayout>
      <span className={`text-5xl ${styles.heading} text-white`}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Meet this week bestseller's!
      </span>
      <div className={styles.products}>
        <div className="flex w-full mt-6 text-primary font-bold flex-col">
          <div className="flex flex-col overflow-visible">
            <Swiper
              style={
                {
                  '--swiper-navigation-color': '#000',
                  '--swiper-pagination-color': '#000',
                } as CSSProperties
              }
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
                <InternalCard />
              </SwiperSlide>
              <SwiperSlide>
                <InternalCard />
              </SwiperSlide>
              <SwiperSlide>
                <InternalCard />
              </SwiperSlide>
              <SwiperSlide>
                <InternalCard />
              </SwiperSlide>
              <SwiperSlide>
                <InternalCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </GlassLayout>
    <GlassLayout>
      <span className={`${styles.heading}`}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Meet this week bestseller's!
      </span>
      <div className={styles.products}>
        <div className="flex w-full mt-6 text-primary font-bold flex-col">
          <div className="flex flex-row gap-2 mt-4">
            <InternalCard />
            <InternalCard />
            <InternalCard />
          </div>
        </div>
      </div>
    </GlassLayout>
  </>
);

export default Products;
