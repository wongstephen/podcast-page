import * as React from 'react';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={9}
    fill="none"
    {...props}
  >
    <path stroke="currentColor" strokeWidth={2} d="M0 1h14M0 8h14" />
  </svg>
);

MenuIcon.displayName = 'MenuIcon';

export { MenuIcon };
