'use client';

import React, { FC, PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProps {}

const Providers: FC<PropsWithChildren<ProvidersProps>> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default Providers;
