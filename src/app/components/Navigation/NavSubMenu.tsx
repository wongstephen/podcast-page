import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@/lib/components/atoms/Button/Button';
import SearchBar from '@/lib/components/molecules/SearchBar/SearchBar';

import { subMenuLinks } from '@/lib/constants/nav';
import { DownArrowIcon } from '@/lib/components/atoms/Icons/DownArrowIcon';
import { SearchIcon } from '@/lib/components/atoms/Icons/Search';

import styles from './NavSubMenu.module.css';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';

type NavSubMenuProps = {
  handleSearchClick?: () => void;
};

export default function NavSubMenu({
  handleSearchClick = () => {},
}: NavSubMenuProps) {
  // !important remove the default value of currentPath in prod. this is for dev only
  const currentPath = usePathname().split('/')[1] || 'podcast';
  const dict = getDictionary('en');

  return (
    <div className={styles.subMenuWrapper}>
      <div className={styles.subMenuContainer}>
        <ul className={styles.subMenuList}>
          {subMenuLinks.map((link) => (
            <li key={link.title} className={styles.subMenuItem}>
              <Link
                href={link.url}
                className={styles.subMenuLink}
                data-activelink={currentPath === link.key}
                title={link.title}
              >
                {link.title}

                {link.expandable && (
                  <span className={styles.expandIcon} aria-hidden="true">
                    <DownArrowIcon />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* searchbar vs search icon button is conditionally rendered based on screen size */}
        <SearchBar className={styles.searchBar} />
        <Button
          appearance="transparent"
          className={styles.searchButton}
          aria-label={dict.common.search}
          onClick={handleSearchClick}
        >
          <SearchIcon className={styles.subMenuSearchIcon} aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
