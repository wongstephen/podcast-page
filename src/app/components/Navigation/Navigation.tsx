'use client';

import React from 'react';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { AircallLogo } from '@/lib/components/atoms/Logo/AircallLogo';
import Banner from './Banner';

import styles from './Navigation.module.css';

import NavSubMenu from './NavSubMenu';
import SkipButton from './SkipButton';

import MainMenu from './MainMenu';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    // Logic to toggle the menu visibility
    // TODO: Implement the actual menu toggle logic
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <SkipButton />
        <div className={styles.container}>
          <Banner />
          <nav className={styles.navigation}>
            <div className={styles.logoContainer}>
              <AircallLogo className={styles.logo} />
              <MainMenu toggleMenu={handleMenuClick} isMenuOpen={isMenuOpen} />
            </div>
            <NavSubMenu />
          </nav>
        </div>
      </div>
    </>
  );
}
