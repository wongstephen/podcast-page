import React from 'react';
import { usePathname } from 'next/navigation';

import Button from '@/lib/components/atoms/Button/Button';
import SearchBar from '@/lib/components/molecules/SearchBar/SearchBar';

import { subMenuLinks } from '@/lib/constants/nav';
import { DownArrowIcon } from '@/lib/components/atoms/Icons/DownArrowIcon';
import { SearchIcon } from '@/lib/components/atoms/Icons/Search';

import styles from './NavSubMenu.module.css';

type NavSubMenuProps = {
  handleSearchClick?: () => void;
};

export default function NavSubMenu({
  handleSearchClick = () => {},
}: NavSubMenuProps) {
  // !important remove the default value of currentPath in prod. this is for dev only
  const currentPath = usePathname().split('/')[1] || 'podcast';

  return (
    <div className={styles.subMenuWrapper}>
      <div className={styles.subMenuContainer}>
        <ul className={styles.subMenuList}>
          {subMenuLinks.map((link) => (
            <li key={link.title} className={styles.subMenuItem}>
              <a
                href={link.url}
                className={styles.subMenuLink}
                data-activelink={currentPath === link.key}
              >
                {link.title}

                {link.expandable && (
                  <span className={styles.expandIcon} aria-hidden="true">
                    <DownArrowIcon />
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* searchbar vs search icon button is conditionally rendered based on screen size */}
        <SearchBar className={styles.searchBar} />
        <Button
          appearance="transparent"
          className={styles.searchButton}
          aria-label="Search"
          onClick={handleSearchClick}
        >
          <SearchIcon className={styles.subMenuSearchIcon} aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
