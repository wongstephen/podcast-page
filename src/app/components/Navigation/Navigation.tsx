'use client';

import React from 'react';

import Button from '@/lib/components/atoms/Button/Button';
import { MenuIcon } from '@/lib/components/atoms/Icons/Menu';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { AircallLogo } from '@/lib/components/atoms/Logo/AircallLogo';
import Banner from './Banner';

import styles from './Navigation.module.css';

import NavSubMenu from './NavSubMenu';

export default function Navigation() {
  const dict = getDictionary('en');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    // Logic to toggle the menu visibility
    // TODO: Implement the actual menu toggle logic
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Banner />
        <nav className={styles.navigation}>
          <div className={styles.logoContainer}>
            <AircallLogo className={styles.logo} />
            <div className={styles.mobileMenuContainer}>
              <Button
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={handleMenuClick}
                appearance="transparent"
                size="none"
                className={styles.menuButton}
              >
                <p className={styles.mobileMenuText}>
                  {dict.common.navigation.main.menu}
                </p>
                <MenuIcon className={styles.menuIcon} aria-hidden="true" />
                <span className="sr-only">
                  {/* for accessibility, hidden visually */}
                  {isMenuOpen ? 'Close menu' : 'Open menu'}{' '}
                </span>
              </Button>
            </div>
          </div>
          <NavSubMenu />
        </nav>
      </div>
    </div>
  );
}
