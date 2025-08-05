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
import Button from '@/lib/components/atoms/Button/Button';

export default function LatestPodcast() {
  const dict = getDictionary('en');
  const { podcasts } = podcastData;

  const initCards = Array.from({ length: maxCardLength }).map((_, index) => {
    return <PodcastCard key={index} skeleton />;
  });

  const [cards, setCards] = React.useState<React.JSX.Element[]>(initCards);

  // new card state
  const [paginatedCard, setPaginatedCard] =
  React.useState<React.JSX.Element[]>(initCards);
  
  // state to track page
  const [page, setPage] = React.useState(0);

  function addCardsToArray(podcastData: typeof podcasts) {
    setCards(() => {
      const newCard = [...initCards];

      for (let i = 0; i < podcastData.length; i++) {
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

  function handleNextFourClick() {
    // what is the current selection of cards
    // what is the next 4 podcast

    setPage((prevPage) => prevPage + 1);

    console.log('clicked');
  }

  useEffect(() => {
    addCardsToArray(podcasts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPaginatedCard(() =>
      cards.slice(page * maxCardLength, (page + 1) * maxCardLength)
    );
  }, [page, cards]);

  // for debuggin
  // useEffect(() => {
  //   console.log(paginatedCard);
  // }, [paginatedCard]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{dict.home.latestReleases.title}</h2>
        <Dropdown sortByOption={sortByOption} />
      </div>
      {/* article list */}
      <div className={styles.cardContainer}>
        {paginatedCard.map((card, index) => (
          <article key={index} className={styles.card}>
            {card}
          </article>
        ))}
        <Button onClick={handleNextFourClick}>Next Four</Button>
      </div>
    </section>
  );
}
