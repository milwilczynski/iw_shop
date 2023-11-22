'use client';

import React, { FC, PropsWithChildren } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import styles from './Content.module.scss';

interface CatalogContentProps {}

const CatalogContent: FC<PropsWithChildren<CatalogContentProps>> = () => {
  const list = [
    {
      title: 'Orange',
      img: 'https://nextui.org/images/fruit-1.jpeg',
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
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2">
        {list.map((item, index) => (
          <Card
            className={styles.card}
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log('item pressed')}
          >
            <CardBody className={`overflow-visible p-0 ${styles.cardBody}`}>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter
              className={`text-small justify-between ${styles.cardFooter}`}
            >
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CatalogContent;
