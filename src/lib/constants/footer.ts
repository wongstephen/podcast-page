import { getDictionary } from '../utilities/dictionaries/dictionaries';

type Tag = 'muted' | 'standout';

type FooterLinkGroup = {
  label: string;
  links: Array<FooterLink>;
};

type FooterLink = {
  label: string;
  tag?: Tag;
  tagText?: string;
  url: string;
  external?: boolean;
};

const dict = getDictionary('en');

export const footerLinks: FooterLinkGroup[] = [
  {
    label: dict.common.footer.navigation.whyAircall,
    links: [
      {
        label: dict.common.footer.navigation.countryCoverage,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.pricing,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.status,
        url: '#',
        tag: 'muted',
        tagText: '99.9%', // this should be dynamic if available
      },
      {
        label: dict.common.footer.navigation.developer,
        url: '#',
      },
    ],
  },
  {
    label: dict.common.footer.navigation.product,
    links: [
      {
        label: dict.common.footer.navigation.integrations,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.features,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.qualityAndReliability,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.apps,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.requestADemo,
        url: '#',
      },
    ],
  },
  {
    label: dict.common.footer.navigation.solutions,
    links: [
      {
        label: dict.common.footer.navigation.callCenter,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.inboundCallCenterSoftware,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.support,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.sales,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.outboundCallCenterSoftware,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.phoneSystem,
        url: '#',
      },
    ],
  },
  {
    label: dict.common.footer.navigation.resources,
    links: [
      {
        label: dict.common.footer.navigation.blog,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.faq,
        external: true,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.customerStudies,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.partnerStories,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.becomeAPartner,
        url: '#',
      },
    ],
  },
  {
    label: dict.common.footer.navigation.company,
    links: [
      {
        label: dict.common.footer.navigation.requestADemo,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.contactUs,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.aboutUs,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.jobs,
        tag: 'standout',
        tagText: dict.common.footer.navigation.wereHiring,
        url: '#',
      },
      {
        label: dict.common.footer.navigation.press,
        url: '#',
      },
    ],
  },
];
