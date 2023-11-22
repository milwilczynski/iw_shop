import React, { FC, PropsWithChildren } from 'react';
import styles from './HalfGlass.module.scss';

interface HalfGlassProps {
  heading: string;
}

const HalfGlass: FC<PropsWithChildren<HalfGlassProps>> = ({
  children,
  heading,
}) => (
  <section className={styles.glassContainer}>
    <div className={styles.glassContent}>
      <div className={styles.headingContainer}>
        <span className={`${styles.heading}`}>{heading}</span>
      </div>
    </div>
    <div className={styles.content}>{children}</div>
  </section>
);

export default HalfGlass;
