import React, { FC, PropsWithChildren } from 'react';
import Ribbon from '@/src/components/Common/Ribbon';
import GlassCardContainer from '@/src/components/Containers/GlassCardContainer';
import CatalogMain from '@/src/components/Catalog/Main';

interface CatalogProps {}

const Catalog: FC<PropsWithChildren<CatalogProps>> = () => (
  <div style={{ marginTop: '0px' }}>
    <Ribbon heading="Collection" />
    <GlassCardContainer>
      <CatalogMain />
    </GlassCardContainer>
  </div>
);

export default Catalog;
