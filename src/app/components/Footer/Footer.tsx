import React from 'react';

import { getDictionary } from '@/lib/utilities/dictionaries/dictionaries';
import { AircallThumbLogo } from '@/lib/components/atoms/Logo/AircallThumbLogo';
import { footerLinks } from '@/lib/constants/footer';
import { legal } from '@/lib/constants/legal';

import styles from './Footer.module.css';
import { ExternalArrowIcon } from '@/lib/components/atoms/Icons/ExternalArrowIcon';
import { social } from '@/lib/constants/social';
import Link from 'next/link';

export default function Footer() {
  const dict = getDictionary('en');
  return (
    <div className={styles.container}>
      <div className={styles.taglineContainer}>
        <AircallThumbLogo className={styles.logo} />
        <p className={styles.tagline}>{dict.common.tagline}</p>
      </div>
      <div className={styles.footerLinksWrapper}>
        <div className={styles.footerLinksContainer}>
          {footerLinks.map((group, index) => (
            <div key={index} className={styles.footerLinkGroup}>
              <h4 className={styles.footerLinkGroupLabel}>{group.label}</h4>
              <ul className={styles.footerLinksList}>
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.footerLinkItem}>
                    <a
                      href={link.url}
                      className={`${styles.footerLink} ${
                        link.tag ? styles[link.tag] : ''
                      }`}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                      {link.external && (
                        <ExternalArrowIcon className={styles.externalIcon} />
                      )}
                      {link.tag && link.tagText && (
                        <span className={styles.tagText} data-tag={link.tag}>
                          {link.tagText}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footerLegal}>
          <ul className={styles.legalLinks}>
            <li>
              <p className={styles.copyright}>
                {dict.common.footer.banner.copyright}
              </p>
            </li>
            {legal.map((item, index) => (
              <li key={index}>
                <a href={item.url} className={styles.legalLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.socialLinks}>
            {social.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  href={item.url}
                  className={styles.socialLink}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className={styles.socialIcon} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
