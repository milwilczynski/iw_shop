import React, { FC, PropsWithChildren } from 'react';
import { Image } from '@nextui-org/react';
import styles from './Brand.module.scss';

interface BrandProps {}

const Brand: FC<PropsWithChildren<BrandProps>> = () => (
  <div className={styles.container}>
    <div className="flex w-full justify-center items-center ">
      <div className="text-secondary-500 font-bold text-6xl p-5 rounded-3xl absolute mt-[125px]">
        Be yourself,
      </div>
      <div className="text-primary font-bold text-6xl p-5 rounded-3xl absolute mt-[210px] ml-[395px] -rotate-12">
        buy in
      </div>
    </div>
    <div className={styles.brand}>
      <Image
        src="brand/logo_gradient.svg"
        radius="none"
        width="100%"
        className="object-contain max-w-[1500px]"
      />
    </div>
  </div>
);

export default Brand;
