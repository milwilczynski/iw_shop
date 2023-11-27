import React from 'react';
import Ribbon from '@/src/components/Common/Ribbon';
import CatalogMain from '@/src/components/Catalog/Main';
import StandardPaddingContainer from '@/src/components/Containers/StandardPaddingContainer';

export default function Catalog() {
  return (
    <div style={{ marginTop: '0px' }}>
      <Ribbon heading="Collection" />
      <StandardPaddingContainer>
        <CatalogMain />
      </StandardPaddingContainer>
    </div>
  );
}
