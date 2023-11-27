import React, { FC, PropsWithChildren } from 'react';
import { Button, ButtonGroup } from '@nextui-org/react';
import styles from './Sidebar.module.scss';

interface CatalogSidebarProps {}

const CatalogSidebar: FC<PropsWithChildren<CatalogSidebarProps>> = () => (
  <div className={styles.content}>
    <div className={styles.list}>
      <ButtonGroup className={styles.btnGroup}>
        <Button size="lg" className={styles.btn}>
          Gobeliny
        </Button>
        <Button size="lg" className={styles.btn}>
          Kwiaty
        </Button>
        <Button size="lg" className={styles.btn}>
          Plecionki
        </Button>
        <Button size="lg" className={styles.btn}>
          Różne
        </Button>
      </ButtonGroup>
    </div>
  </div>
);

export default CatalogSidebar;
