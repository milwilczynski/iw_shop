import React, { FC, PropsWithChildren } from 'react';
import styles from './Brand.module.scss';

interface BrandProps {}

const Home: FC<PropsWithChildren<BrandProps>> = () => (
  <div className={styles.container}>
    <div className={styles.brand}>
      <span className="text-9xl text-white" />
    </div>
  </div>
);

export default Home;
