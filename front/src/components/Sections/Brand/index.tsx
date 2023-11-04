import React, { FC, PropsWithChildren } from 'react';
import styles from './Brand.module.scss';

interface BrandProps {}

const Home: FC<PropsWithChildren<BrandProps>> = () => (
  <div className="w-full flex items-center justify-center rounded-3xl p-20">
    <div className={`text-9xl text-white ${styles.glass}`}>
      <span>IW</span>
    </div>
  </div>
);

export default Home;
