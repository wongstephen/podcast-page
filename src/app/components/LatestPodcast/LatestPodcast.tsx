'use client';

import React from 'react';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import podcastData from '@/lib/mockData/podcast.json';
import { sortByOptionType } from '@/lib/types/podcast';
import { maxCardLength } from '@/lib/constants/podcasts';

import Dropdown from './Dropdown';
import PodcastCard from './PodcastCard';
import styles from './LatestPodcast.module.css';

export default function LatestPodcast() {
  const dict = getDictionary('en');
  const { podcasts } = podcastData;

  const initCards = Array.from({ length: maxCardLength }).map((_, index) => {
    if (podcasts[index]) {
      return (
        <PodcastCard
          key={index}
          title={podcasts[index].title}
          image={podcasts[index].image}
          date={podcasts[index].date}
          duration={podcasts[index].duration}
          episode={podcasts[index].episode}
          season={podcasts[index].season}
        />
      );
    }

    return <PodcastCard skeleton key={index} />;
  });

  const [cards, setCards] = React.useState<React.JSX.Element[]>(initCards);

  function addCardsToArray(podcastData: typeof podcasts) {
    const newCards = [...initCards].map((_, index) => {
      if (podcastData[index]) {
        return (
          <PodcastCard
            key={index}
            title={podcastData[index].title}
            image={podcastData[index].image}
            date={podcastData[index].date}
            duration={podcastData[index].duration}
            episode={podcastData[index].episode}
            season={podcastData[index].season}
          />
        );
      }
      return <PodcastCard key={index} skeleton />;
    });
    setCards(newCards);
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

  return (
    <section className={styles.container}>
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
