import React, { FC, PropsWithChildren } from 'react';
import { Image } from '@nextui-org/react';
import styles from './Brand.module.scss';

interface BrandProps {}

const Brand: FC<PropsWithChildren<BrandProps>> = () => (
  <div className={styles.container}>
    <div className={styles.brand}>
      <Image
        src="brand/background.svg"
        radius="lg"
        width="100%"
        className="object-contain"
      />
    </div>
  </div>
);

export default Brand;
