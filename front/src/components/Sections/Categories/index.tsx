import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import StandardPaddingContainer from '@/src/components/Containers/StandardPaddingContainer';
import styles from './Categories.module.scss';

interface CategoriesProps {
  classes?: string;
  style?: CSSProperties;
}

const Categories: FC<PropsWithChildren<CategoriesProps>> = ({
  classes,
  style,
}) => (
  <StandardPaddingContainer>
    <div className={`${styles.container} ${classes}`} style={style}>
      <div className={styles.heading}>
        <h2>Our Collection</h2>
      </div>
      <div className={styles.categoriesContainer}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  </StandardPaddingContainer>
);

export default Categories;
