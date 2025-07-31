import { SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    fill="none"
    {...props}
  >
    <circle cx={14} cy={14} r={14} fill="#00B388" fillOpacity={0.15} />
    <path
      fill="#00B388"
      d="M19.39 13.122a1 1 0 0 1 0 1.756l-7.911 4.315A1 1 0 0 1 10 18.315v-8.63a1 1 0 0 1 1.479-.878l7.912 4.315Z"
    />
  </svg>
);
export { PlayIcon };
