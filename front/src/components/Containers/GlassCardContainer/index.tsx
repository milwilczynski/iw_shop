import React, { FC, PropsWithChildren } from 'react';
import styles from './GlassCardContainer.module.scss';

interface GlassCardContainerProps {
  rest?: object;
}

const GlassCardContainer: FC<PropsWithChildren<GlassCardContainerProps>> = ({
  children,
  rest,
}) => (
  <div className={`${styles.content} ${styles.glassContentNtb}`} {...rest}>
    <div className={styles.glassContent}>{children}</div>
  </div>
);

export default GlassCardContainer;
