import React, { FC, PropsWithChildren } from 'react';
import InternalCard from '@/src/components/Products/InternalCard';
import styles from './Products.module.scss';

interface ProductsProps {}

const Products: FC<PropsWithChildren<ProductsProps>> = () => (
  <section className={styles.products}>
    <div className="flex w-full mt-6 text-primary font-bold flex-col">
      <span className={`text-5xl ${styles.heading} text-white`}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Meet this week bestseller's!
      </span>
      <div className="flex flex-row gap-2 mt-4">
        <InternalCard />
        <InternalCard />
        <InternalCard />
      </div>
    </div>
  </section>
);

export default Products;
