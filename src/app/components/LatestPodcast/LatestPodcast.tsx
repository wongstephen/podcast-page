'use client';

import React, { useEffect } from 'react';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import podcastData from '@/lib/mockData/podcast.json';
import { sortByOptionType } from '@/lib/types/podcast';
import { maxCardLength } from '@/lib/constants/podcasts';
import { prefixImgPath } from '@/lib/utilities/prefixImgPath';

import Dropdown from './Dropdown';
import PodcastCard from './PodcastCard';
import styles from './LatestPodcast.module.css';

export default function LatestPodcast() {
  const dict = getDictionary('en');
  const { podcasts } = podcastData;

  const initCards = Array.from({ length: maxCardLength }).map((_, index) => {
    return <PodcastCard key={index} skeleton />;
  });

  const [cards, setCards] = React.useState<React.JSX.Element[]>(initCards);

  function addCardsToArray(podcastData: typeof podcasts) {
    setCards(() => {
      const newCard = [...initCards];

      for (let i = 0; i < maxCardLength && i < podcastData.length; i++) {
        if (podcastData[i]) {
          newCard[i] = (
            <PodcastCard
              key={i}
              title={podcastData[i].title}
              image={prefixImgPath(podcastData[i].image)}
              date={podcastData[i].date}
              duration={podcastData[i].duration}
              episode={podcastData[i].episode}
              season={podcastData[i].season}
            />
          );
        }
      }
      return newCard;
    });
  }

  function sortByOption(option: sortByOptionType) {
    const sortedPodcasts = [...podcasts];

    if (option === 'newest') {
      sortedPodcasts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    } else if (option === 'oldest') {
      sortedPodcasts.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    } else if (option === 'title') {
      sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title));
    }

    addCardsToArray(sortedPodcasts);
  }

  useEffect(() => {
    addCardsToArray(podcasts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.container} aria-live="polite">
      <div className={styles.header}>
        <h2 className={styles.title}>{dict.home.latestReleases.title}</h2>
        <Dropdown sortByOption={sortByOption} />
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
  