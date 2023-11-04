'use client';

import React, { FC, PropsWithChildren } from 'react';
import InternalCard from '@/src/components/Products/InternalCard';
import GlassLayout from '@/src/components/Layouts/GlassLayout';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
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
          <div className="flex flex-row overflow-visible">
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={3}
              coverflowEffect={{
                rotate: -15,
                stretch: -50,
                depth: 50,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
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
