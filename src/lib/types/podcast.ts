export type Podcast = {
  id: number;
  title: string;
  duration: number;
  season: number;
  episode: number;
  date: string;
  image: string;
};

export type sortByOptionType = 'newest' | 'oldest' | 'title';

