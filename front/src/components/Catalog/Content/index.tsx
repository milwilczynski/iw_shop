'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Progress,
} from '@nextui-org/react';
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
        {list.map((item, index) => (
          <Card
            isPressable
            as="a"
            href={`?${item.title}`}
            radius="sm"
            className={`${styles.card}`}
            key={item.title}
            shadow="sm"
          >
            <CardFooter className={`justify-between ${styles.cardFooter}`}>
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  console.log('item: ', item.title);
                }}
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
            <CardHeader className={styles.cardHeader}>
              <Image
                isZoomed
                isBlurred
                radius="sm"
                loading="lazy"
                shadow="sm"
                alt="Card background"
                src={item.img}
                width="100%"
                className="object-cover"
              />
            </CardHeader>
            <CardBody className={styles.cardBody}>
              <h2 className="text-large font-bold text-default-500">
                {item.title}
              </h2>
              <div className="flex flex-col">
                <Progress aria-label="Rating" value={60} className="mt-1" />
                <div className="flex w-full justify-end text-tiny text-default-500">
                  Ponad 292 opinii
                </div>
              </div>
              <div className="flex text-large text-primary">{item.price}</div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CatalogContent;
