import { SVGProps } from 'react';
const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 5"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m2.829 3.829.707.707.707-.707.353-.354 1.415-1.414L7.07 1 6.364.292l-1.06 1.06-1.415 1.415-.353.353-.354-.353-1.414-1.414L.708.293 0 1l1.06 1.06 1.415 1.415.354.354Z"
      clipRule="evenodd"
      opacity={0.5}
    />
  </svg>
);
export { DownArrowIcon };
