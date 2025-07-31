import React from 'react';

import Button from '@/lib/components/atoms/Button/Button';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import styles from './Banner.module.css';
import Link from 'next/link';
import { DownArrowIcon } from '@/lib/components/atoms/Icons/DownArrowIcon';

function Banner() {
  const dict = getDictionary('en');
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.phoneText}>{dict.common.banner.phone}</p>
        {/* TODO: Add contact us link */}
        <Link href="#" className={styles.contactLink}>
          {dict.common.banner.contactUs}
        </Link>
        <div className={styles.buttonsContainer}>
          <Button appearance="outline" size="small">
            {dict.common.banner.login}
          </Button>
          <Button className={styles.localeButton} appearance="outline-secondary" size="small">
            {/* TODO: Add options input for language selection */}
            {dict.common.locales.fr}
            <DownArrowIcon className={styles.expandLocaleIcon} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
