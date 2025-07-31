import { SVGProps } from 'react';

const DeezerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#000" />
    <g fill="#F9FCFE" clipPath="url(#a)">
      <path d="M23.542 9.083h-3.938v2.297h3.938V9.083ZM23.542 12.283h-3.938v2.297h3.938v-2.297ZM23.542 15.481h-3.938v2.298h3.938V15.48ZM9.268 18.68H5.331v2.299h3.937V18.68ZM14.025 18.68h-3.937v2.299h3.937V18.68ZM18.784 18.68h-3.937v2.299h3.937V18.68ZM23.542 18.68h-3.938v2.299h3.938V18.68ZM18.784 15.481h-3.937v2.298h3.937V15.48ZM14.025 15.481h-3.937v2.298h3.937V15.48ZM14.025 12.283h-3.937v2.297h3.937v-2.297Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M5.25 9h18.395v12.052H5.25z" />
      </clipPath>
    </defs>
  </svg>
);
export { DeezerIcon };
