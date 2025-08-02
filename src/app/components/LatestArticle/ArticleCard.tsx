import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './ArticleCard.module.css';
import { Article } from '@/lib/types/article';
import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';

export default function ArticleCard({
  image,
  title,
  tag,
  duration,
  description,
  date, // to be implemented in the future
}: Article) {
  const dict = getDictionary('en');
  return (
    <Link href="">
      <div className={styles.articleCard}>
        <Image
          src={image}
          alt={title}
          // Metadata for image should come from API
          width={311}
          height={140}
          className={styles.articleImage}
          sizes="(min-width: 1440px) 255px, (min-width: 1140px) 323px, (min-width: 840px) calc(26.43vw + 27px), (min-width: 580px) calc(50vw - 39px), calc(95.38vw - 38px)"
        />
        <div className={styles.articleContent}>
          <p className={styles.articleMeta}>
            <span data-tag={tag.toLowerCase()} className={styles.articleTag}>
              {
                dict.common.podcastCategories[
                  tag.toLowerCase() as keyof typeof dict.common.podcastCategories
                ]
              }
            </span>
            <span>&#8226;</span>
            <span>
              {duration} {dict.home.latestArticles.minRead}
            </span>
          </p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
