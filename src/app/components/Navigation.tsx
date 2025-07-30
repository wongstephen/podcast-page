'use client';

import React from 'react';

import Banner from './Banner';
import { MenuIcon } from '@/lib/components/atoms/Icons/Menu';

import styles from './Navigation.module.css';
import Button from '@/lib/components/atoms/Button/Button';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { AircallLogo } from '@/lib/components/atoms/Logo/AircallLogo';

export default function Navigation() {
  const dict = getDictionary('en');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = () => {
    // Logic to toggle the menu visibility
    // TODO: Implement the actual menu toggle logic
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.container}>
      <Banner />
      <div className={styles.logoContainer}>
        <AircallLogo className={styles.logo} />
        <nav>
          <div className={styles.mobileMenuContainer}>
            <Button
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={handleClick}
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
        </nav>
      </div>
    </header>
  );
}
