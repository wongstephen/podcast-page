import React from 'react';
import Image from 'next/image';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { SpotifyIcon } from '@/lib/components/atoms/Icons/SpotifyIcon';
import { DeezerIcon } from '@/lib/components/atoms/Icons/DeezerIcon';
import { AppleIcon } from '@/lib/components/atoms/Icons/AppleIcon';
import { heroData } from '@/lib/constants/hero';
import { prefixImgPath } from '@/lib/utilities/prefixImgPath';

import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const dict = getDictionary('en');
  const { heroImage } = heroData;
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* hero image */}
        <div className={styles.heroImageContainer}>
          <Image
            src={prefixImgPath(heroImage.src)}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className={styles.heroImage}
            sizes={heroImage.sizes}
            priority
          />
        </div>
        {/* content */}
        <div className={styles.content}>
          <h1 className={styles.heroTitleText}>{dict.home.hero.title} </h1>

          <p className={styles.subscribeTitle}>{dict.home.hero.subscribe}</p>
          {/* TODO: If this is repeated in other parts of the site, consider creating a shared component for the podcast subscription links. */}
          <div className={styles.subscribeLinksContainer}>
            <Link
              className={styles.subscribeLink}
              href="#"
              title={dict.home.hero.podcastList.spotify}
            >
              <SpotifyIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.spotify}
              </p>
            </Link>
            <Link
              className={styles.subscribeLink}
              href="#"
              title={dict.home.hero.podcastList.deezer}
            >
              <DeezerIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.deezer}
              </p>
            </Link>
            <Link
              className={styles.subscribeLink}
              href="#"
              title={dict.home.hero.podcastList.apple}
            >
              <AppleIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.apple}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
