import React, { FC, PropsWithChildren } from 'react';
import styles from './Ribbon.module.scss';

interface RibbonProps {
  heading: string;
}

const Ribbon: FC<PropsWithChildren<RibbonProps>> = ({ heading }) => (
  <div className={styles.ribbon}>
    <h2>{heading}</h2>
  </div>
);

export default Ribbon;
