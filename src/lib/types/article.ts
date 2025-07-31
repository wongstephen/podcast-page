export type ArticleTag = 'PRODUCT' | 'LIFE' | 'SALES';

export type Article = {
  id: number;
  title: string;
  description: string;
  tag: ArticleTag;
  duration: number;
  date: string;
  image: string;
};
