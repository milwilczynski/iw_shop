import React, { FC, PropsWithChildren } from 'react';
import styles from './CommonLayout.module.scss';
import Navigation from '@/src/components/Navigation';
interface CommonLayoutProps {}

const CommonLayout: FC<PropsWithChildren<CommonLayoutProps>> = ({
  children,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default CommonLayout;
