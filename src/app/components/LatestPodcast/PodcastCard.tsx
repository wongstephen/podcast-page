import React from 'react';
import styles from './PodcastCard.module.css';
import Image from 'next/image';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { PlayIcon } from '@/lib/components/atoms/Icons/PlayIcon';
import { Podcast } from '@/lib/types/podcast';
import { cn } from '@/lib/utilities/cn';
import { PlayTriangleIcon } from '@/lib/components/atoms/Icons/PlayTriangleIcon';

type PodcastCardProps =
  | { skeleton: true }
  | (({
      skeleton?: false;
    } & Omit<Podcast, 'id'>) &
      React.ComponentProps<'div'>);

const dict = getDictionary('en');

function Skeleton({ className }: React.ComponentProps<'div'>) {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.imageWrapper}>
        <div className={styles.skeletonImage}>
          <p>{dict.common.comingSoon}</p>
        </div>
      </div>
      <div className={styles.skeletonText} />
      <div className={styles.skeletonText} />
    </div>
  );
}

export default function PodcastCard(props: PodcastCardProps) {
  if (props.skeleton) {
    return <Skeleton />;
  }

  const { title, image, duration, season, episode, className } = props;
  return (
    <div className={cn(styles.container, styles.content, className)}>
      <div className={cn(styles.imageWrapper)}>
        <Image src={image} alt={title} fill />
        <div className={styles.overlayWrapper}>
          <div className={styles.overlayCircle} />
          <PlayTriangleIcon className={styles.overlayIcon} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.episodeInfo}>
          S{season.toString().padStart(2, '0')}E
          {episode.toString().padStart(2, '0')} | {duration}MIN
        </p>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.listenNow}>
          <PlayIcon className={styles.playIcon} />
          {dict.common.listenNow}
        </div>
      </div>
    </div>
  );
}
