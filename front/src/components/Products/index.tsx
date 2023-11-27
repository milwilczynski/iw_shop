'use client';

import React, { FC, PropsWithChildren } from 'react';
import HalfGlass from '@/src/components/Common/HalfGlass';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import InternalSwiper from '@/src/components/Common/InternalSwiper';
import Categories from '@/src/components/Sections/Categories';
import Brand from '@/src/components/Sections/Brand';
import styles from './Products.module.scss';

interface ProductsProps {}

const Products: FC<PropsWithChildren<ProductsProps>> = () => (
  <div className="w-full">
    <Brand />
    <Categories classes="container-padding" />
    <HalfGlass heading={"Meet this week bestseller's!"}>
      <div className={styles.products}>
        <div className="flex w-full mt-6 text-primary font-bold flex-col">
          <div className="flex flex-col overflow-visible">
            <InternalSwiper />
          </div>
        </div>
      </div>
    </HalfGlass>
    <Categories style={{ marginTop: '20px' }} />
  </div>
);

export default Products;
