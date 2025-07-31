import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';

const dict = getDictionary('en');

type MenuItem = {
  title: string;
  url: string;
  expandable: boolean;
  key: string;
};

export const mainMenuLinks: MenuItem[] = [
  {
    title: dict.common.navigation.main.whyAirCall,
    url: `/whyaircall`,
    expandable: true,
    key: 'whyaircall',
  },
  {
    title: dict.common.navigation.main.solutions,
    url: `/solutions`,
    expandable: true,
    key: 'solutions',
  },
  {
    title: dict.common.navigation.main.pricing,
    url: `/pricing`,
    expandable: false,
    key: 'pricing',
  },
  {
    title: dict.common.navigation.main.resources,
    url: `/resources`,
    expandable: true,
    key: 'resources',
  },
  {
    title: dict.common.navigation.main.partners,
    url: `/partners`,
    expandable: true,
    key: 'partners',
  },
  {
    title: dict.common.navigation.main.company,
    url: `/company`,
    expandable: true,
    key: 'company',
  },
];

export const subMenuLinks: MenuItem[] = [
  {
    title: dict.common.navigation.secondary.all,
    url: `/all`,
    expandable: false,
    key: 'all',
  },
  {
    title: dict.common.navigation.secondary.callCenter,
    url: `/callcenter`,
    expandable: false,
    key: 'callcenter',
  },
  {
    title: dict.common.navigation.secondary.support,
    url: `/support`,
    expandable: false,
    key: 'support',
  },
  {
    title: dict.common.navigation.secondary.customerStories,
    url: `/customerstories`,
    expandable: false,
    key: 'customerstories',
  },
  {
    title: dict.common.navigation.secondary.webinars,
    url: `/webinars`,
    expandable: false,
    key: 'webinars',
  },
  {
    title: dict.common.navigation.secondary.podcast,
    url: `/podcast`,
    expandable: false,
    key: 'podcast',
  },
  {
    title: dict.common.navigation.secondary.more,
    url: `/more`,
    expandable: true,
    key: 'more',
  },
];
