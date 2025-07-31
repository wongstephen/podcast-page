import React from 'react';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { articles } from '@/lib/mockData/article.json';
import styles from './LatestArticle.module.css';
import ArticleCard from './ArticleCard';
import { Article } from '@/lib/types/article';

export default function LatestArticle() {
  const dict = getDictionary('en');
  return (
    <div className={styles.container}>
      <h2 className={styles.articleSectionTitle}>
        {dict.home.latestArticles.title}
      </h2>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            tag={article.tag as Article['tag']}
            duration={article.duration}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
}
