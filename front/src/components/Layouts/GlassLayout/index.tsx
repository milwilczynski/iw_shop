import React, { FC, PropsWithChildren, useMemo } from 'react';
import styles from './GlassLayout.module.scss';

interface GlassLayoutProps {}

const GlassLayout: FC<PropsWithChildren<GlassLayoutProps>> = ({ children }) => {
  const arrayChildren = useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  return (
    <section className={styles.glassContainer}>
      <div className={styles.glassContent}>{arrayChildren[0]}</div>
      <div className={styles.content}>{arrayChildren[1]}</div>
    </section>
  );
};

export default GlassLayout;
