import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';

const dict = getDictionary('en');

export const subMenuLinks = [
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
