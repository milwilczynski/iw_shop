import React, { FC, PropsWithChildren } from 'react';
import styles from './StandardPaddingContainer.module.scss';

interface StandardPaddingContainerProps {}

const StandardPaddingContainer: FC<
  PropsWithChildren<StandardPaddingContainerProps>
> = ({ children }) => (
  <section className={styles.containerPadding}>{children}</section>
);

export default StandardPaddingContainer;
