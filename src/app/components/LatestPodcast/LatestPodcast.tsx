import React from 'react';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';

import styles from './LatestPodcast.module.css';
import PodcastCard from './PodcastCard';
import { podcasts } from '@/lib/mockData/podcast.json';
import { DownArrowIcon } from '@/lib/components/atoms/Icons/DownArrowIcon';

export default function LatestPodcast() {
  const dict = getDictionary('en');
  const cardLength = 4;

  const cards = Array.from({ length: cardLength }, (_, index) => (
    <PodcastCard skeleton={true} key={index} />
  ));

  // Mock data for demonstration purposes
  for (let i = 0; i < podcasts.length && i < cardLength; i++) {
    cards[i] = (
      <PodcastCard
        title={podcasts[i].title}
        image={podcasts[i].image}
        duration={podcasts[i].duration}
        season={podcasts[i].season}
        episode={podcasts[i].episode}
        date={new Date(podcasts[i].date).toLocaleDateString()}
      />
    );
  }
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{dict.home.latestReleases.title}</h2>
        <button aria-label="Sort Podcast By" className={styles.sortButton}>
          <span>{dict.common.sortBy}</span>
          <DownArrowIcon className={styles.expandIcon} />
        </button>
      </div>
      {/* article list */}
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <article key={index} className={styles.card}>
            {card}
          </article>
        ))}
      </div>
    </section>
  );
}
