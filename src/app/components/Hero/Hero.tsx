import React from 'react';
import Image from 'next/image';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { SpotifyIcon } from '@/lib/components/atoms/Icons/SpotifyIcon';
import { DeezerIcon } from '@/lib/components/atoms/Icons/DeezerIcon';
import { AppleIcon } from '@/lib/components/atoms/Icons/AppleIcon';

import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const dict = getDictionary('en');
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* hero image */}
        <div className={styles.heroImageContainer}>
          {/* Note: The image path and specs should be provided by the cms */}
          <Image
            src={`${process.env.PAGES_BASE_PATH || ''}/hero-image.webp`}
            alt="The Power of Conversation"
            width={311}
            height={233.42}
            className={styles.heroImage}
            sizes="(min-width: 1020px) 426px, (min-width: 480px) 466px, calc(95.63vw + 15px)"
            priority
          />
        </div>
        {/* content */}
        <div className={styles.content}>
          <h1 className={styles.heroTitleText}>{dict.home.hero.title} </h1>

          <p className={styles.subscribeTitle}>{dict.home.hero.subscribe}</p>
          {/* TODO: If this is repeated in other parts of the site, consider creating a shared component for the podcast subscription links. */}
          <div className={styles.subscribeLinksContainer}>
            <Link className={styles.subscribeLink} href="#">
              <SpotifyIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.spotify}
              </p>
            </Link>
            <Link className={styles.subscribeLink} href="#">
              <DeezerIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.deezer}
              </p>
            </Link>
            <Link className={styles.subscribeLink} href="#">
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
