import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './ColumnContainer.module.scss';

interface ColumnContainerProps {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  options?: {
    leftWidth?: string;
    rightWidth?: string;
    columnGap?: string;
  };
}

const ColumnContainer: FC<PropsWithChildren<ColumnContainerProps>> = ({
  leftColumn,
  rightColumn,
  options = {
    leftWidth: '2fr',
    rightWidth: '8fr',
    columnGap: '20px',
  },
}) => (
  <section
    className={styles.columnContainer}
    style={
      {
        '--left-column-width': options.leftWidth,
        '--right-column-width': options.rightWidth,
        '--column-gap': options.columnGap,
      } as CSSProperties
    }
  >
    <div>{leftColumn}</div>
    <div>{rightColumn}</div>
  </section>
);

export default ColumnContainer;
