import React, { FC, PropsWithChildren } from 'react';
import { Card, CardBody, CardHeader, Image, Progress } from '@nextui-org/react';
import styles from './SwiperCard.module.scss';

interface SwiperCardProps {}

const SwiperCard: FC<PropsWithChildren<SwiperCardProps>> = () => (
  <Card isPressable className={`${styles.card}`} shadow="sm">
    <CardHeader className={styles.cardHeader}>
      <Image
        isZoomed
        radius="sm"
        loading="lazy"
        shadow="sm"
        alt="Card background"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width="100%"
        className="object-cover"
      />
    </CardHeader>
    <CardBody className={styles.cardBody}>
      <h2 className="text-large font-bold text-default-500">
        Dziewczyna z zapałkami
      </h2>
      <div className="flex flex-col">
        <Progress aria-label="Rating" value={60} className="mt-1" />
        <div className="flex w-full justify-end text-tiny text-default-500">
          Ponad 292 opinii
        </div>
      </div>
      <div className="flex text-large text-primary">€39.99</div>
    </CardBody>
  </Card>
);

export default SwiperCard;
