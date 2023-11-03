'use client';

import React, { FC, PropsWithChildren } from 'react';
import styles from './CommonLayout.module.scss';

interface CommonLayoutProps {}

const CommonLayout: FC<PropsWithChildren<CommonLayoutProps>> = ({
  children,
}) => (
  <section className={styles.container}>
    <div className={styles.content}>{children}</div>
  </section>
);

export default CommonLayout;
