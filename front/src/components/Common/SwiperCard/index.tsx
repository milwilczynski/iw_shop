import React, { FC, PropsWithChildren } from 'react';
import { Card, CardBody, CardHeader, Image, Progress } from '@nextui-org/react';
import styles from './SwiperCard.module.scss';

interface SwiperCardProps {}

const SwiperCard: FC<PropsWithChildren<SwiperCardProps>> = () => (
  <Card isPressable isHoverable className={`${styles.card}`} shadow="sm">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
      <Image
        isZoomed
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      />
    </CardHeader>
    <CardBody className="overflow-visible py-2 text-primary">
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
