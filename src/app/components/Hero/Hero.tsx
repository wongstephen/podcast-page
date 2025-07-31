import React from 'react';
import Image from 'next/image';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { SpotifyIcon } from '@/lib/components/atoms/Icons/SpotifyIcon';
import { DeezerIcon } from '@/lib/components/atoms/Icons/DeezerIcon';
import { AppleIcon } from '@/lib/components/atoms/Icons/AppleIcon';

import styles from './Hero.module.css';

export default function Hero() {
  const dict = getDictionary('en');
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* hero image */}
        <div className={styles.heroImageContainer}>
          {/* Note: The image path and specs should be provided by the cms */}
          <Image
            src="/hero-image.webp"
            alt="The Power of Conversation"
            width={311}
            height={233.42}
            className={styles.heroImage}
          />
        </div>
        {/* content */}
        <div className={styles.content}>
          <h1 className={styles.heroTitleText}>{dict.home.hero.title} </h1>

          <p className={styles.subscribeTitle}>{dict.home.hero.subscribe}</p>
          {/* TODO: If this is repeated in other parts of the site, consider creating a shared component for the podcast subscription links. */}
          <div className={styles.subscribeLinksContainer}>
            <div className={styles.subscribeLink}>
              <SpotifyIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.spotify}
              </p>
            </div>
            <div className={styles.subscribeLink}>
              <DeezerIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.deezer}
              </p>
            </div>
            <div className={styles.subscribeLink}>
              <AppleIcon className={styles.podcastIcon} />
              <p className={styles.podcastText}>
                {dict.home.hero.podcastList.apple}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
