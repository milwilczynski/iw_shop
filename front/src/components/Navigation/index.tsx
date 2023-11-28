'use client';

import React, { FC, PropsWithChildren } from 'react';
import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import styles from './Navigation.module.scss';

interface NavigationProps {}

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Catalog',
    href: '/catalog',
  },
];
const Navigation: FC<PropsWithChildren<NavigationProps>> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className={styles.navigation}
      position="sticky"
      isBordered
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="text-primary"
        />
      </NavbarContent>
      <NavbarContent justify="start" className="sm:justify-center">
        <NavbarBrand>
          <Link color="primary" href="/" className="pt-2">
            <Image
              src="brand/logo_gradient.svg"
              width="100%"
              className="h-[40px]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/catalog">
            Catalog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/">Integrations</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
