import React from 'react';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.scss';
import Providers from '@/src/providers';
import Navigation from '@/src/components/Navigation';
import CommonLayout from '@/src/components/Layouts/CommonLayout';
import Brand from '@/src/components/Sections/Brand';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light-purple">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Nunito+Sans:opsz@6..12&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <CommonLayout>
            <Brand />
            {children}
          </CommonLayout>
        </Providers>
      </body>
    </html>
  );
}
