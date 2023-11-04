'use client';

import React, { FC, PropsWithChildren } from 'react';
import styles from './CommonLayout.module.scss';

interface CommonLayoutProps {}

const CommonLayout: FC<PropsWithChildren<CommonLayoutProps>> = ({
  children,
}) => (
  <section>
    <section className={`${styles.container}`}>
      <div className={styles.content}>{children}</div>
    </section>
    <section className={styles.bg}>
      <div className={styles.sliderThumb} />
      <div className={styles.sliderThumb} />
      <div className={styles.sliderThumb} />
    </section>
  </section>
);

export default CommonLayout;
