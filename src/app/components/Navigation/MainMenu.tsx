import React from 'react';
import Button from '@/lib/components/atoms/Button/Button';
import { MenuIcon } from '@/lib/components/atoms/Icons/Menu';
import { mainMenuLinks } from '@/lib/constants/nav';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { DownArrowIcon } from '@/lib/components/atoms/Icons/DownArrowIcon';
import styles from './MainMenu.module.css';
import Link from 'next/link';

type MainMenuProps = {
  toggleMenu?: () => void;
  isMenuOpen?: boolean;
};

export default function MainMenu({ toggleMenu, isMenuOpen }: MainMenuProps) {
  const dict = getDictionary('en');

  return (
    <div className={styles.container}>
      <div className={styles.mobileMenuContainer}>
        <Button
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
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
      <div className={styles.desktopMenuContainer}>
        <div className={styles.menuWrapper}>
          <ul className={styles.menuList}>
            {mainMenuLinks.map((link) => (
              <li key={link.key} className={styles.menuItem}>
                {/* TODO: Expandable links should be buttons for accessibility */}
                <Link href={link.url} className={styles.menuLink}>
                  {link.title}
                  {link.expandable && (
                    <DownArrowIcon className={styles.expandIcon} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Button>{dict.common.navigation.main.tryForFree}</Button>
      </div>
    </div>
  );
}
