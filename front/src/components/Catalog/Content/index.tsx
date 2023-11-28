'use client';

import React, { FC, PropsWithChildren } from 'react';
import ProductCard from '@/src/components/Common/Cards/ProductCard';
import styles from './Content.module.scss';

interface CatalogContentProps {}

const CatalogContent: FC<PropsWithChildren<CatalogContentProps>> = () => {
  const list = [
    {
      title: 'Orange',
      img: '/gobelin.png',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: 'https://nextui.org/images/fruit-2.jpeg',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: 'https://nextui.org/images/fruit-3.jpeg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: 'https://nextui.org/images/fruit-4.jpeg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: 'https://nextui.org/images/fruit-5.jpeg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: 'https://nextui.org/images/fruit-6.jpeg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: 'https://nextui.org/images/fruit-7.jpeg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: 'https://nextui.org/images/fruit-8.jpeg',
      price: '$12.20',
    },
  ];
  return (
    <div className={styles.content}>
      <div className={styles.cardContainer}>
        {list.map((item) => (
          <ProductCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default CatalogContent;
