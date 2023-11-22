import React, { FC, PropsWithChildren } from 'react';
import CatalogSidebar from '@/src/components/Catalog/Sidebar';
import CatalogContent from '@/src/components/Catalog/Content';
import styles from './Main.module.scss';

interface CatalogMainProps {}

const CatalogMain: FC<PropsWithChildren<CatalogMainProps>> = () => (
  <div className={styles.content}>
    <CatalogSidebar />
    <CatalogContent />
  </div>
);

export default CatalogMain;
